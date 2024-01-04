import * as waxjs from "@waxio/waxjs/dist";
import { JsonRpc } from "eosjs";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { removeStorage, setStorage, upperFirst } from "utils-react";

import AuthService from "../services/AuthService";
// import { wombatSignIn } from "../services/wombat";
import { wombatSignIn, wombatTransact } from "../services/scatter";
import { getStorage } from "../utils";
import { config } from "../utils/constants";
import { rede } from "../utils/rede";

interface IAuthProvider {
  children: ReactNode;
}

interface IActiveUserData {
  accountName: string;
  requestPermission: string;
  wallet: "wax" | "anchor" | "wombat";
}

interface IAuthService {
  type: "wax" | "anchor" | "wombat";
  actions: any[];
  successFunction?: any;
}

interface AuthContextProps {
  activeUserData: IActiveUserData | undefined;
  handleWaxSignIn: () => Promise<void>;
  handleAnchorSignIn: () => Promise<void>;
  handleLogout: () => Promise<void>;
  handleWombatSignIn: () => Promise<void>;
  ActionService: ({
    type,
    actions,
    successFunction,
  }: IAuthService) => Promise<any>;
}

export const AuthContext = createContext({} as AuthContextProps);

const endpoint = rede === "mainet" ? config.bloksMainet : config.bloksTestnet;
const chainId =
  rede === "mainet" ? config.chainIdMainet : config.chainIdTestnet;
const host = config.host;

export const AuthProvider = ({ children }: IAuthProvider) => {
  const appname = rede === "mainet" ? config.appNameMainet : config.appNameTest;
  const [activeUserData, setActiveUserData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState({
    stats: false,
    timestamp: 0,
  });
  const [now, setNow] = useState<number>(Date.now());
  const router = useRouter();
  const rpc = new JsonRpc(endpoint);
  const net = {
    blockchain: "eos",
    chainId,
    protocol: "https",
    host,
    port: 443,
  };

  // const net = {
  //   chainId,
  //   rpcEndpoints: [
  //     {
  //       protocol: "https",
  //       host,
  //       port: 443,
  //     },
  //   ],
  // };

  const auth = AuthService(endpoint, chainId, appname);
  // const wombat = new WombatUser(net, { appName: config.appName });

  const handleWaxSignIn = async () => {
    await auth.handleWaxSignIn();
    setIsLoading({
      stats: true,
      timestamp: now,
    });

    const userData = getStorage("Wax");

    setActiveUserData(userData);
  };

  const handleAnchorSignIn = async () => {
    await auth.handleAnchorSignIn();
    setIsLoading({
      stats: true,
      timestamp: now,
    });

    const userData = await getStorage("Anchor");

    setActiveUserData(userData);
  };

  const handleWombatSignIn = async () => {
    wombatSignIn(net);
    // wombat.getAccountName();

    setIsLoading({
      stats: true,
      timestamp: now,
    });

    const userData = await getStorage("Wombat");

    setActiveUserData(userData);
  };

  // useEffect(() => {
  //   console.log(ScatterJS.identity);
  // }, [ScatterJS]);

  const handleLogout = async () => {
    if (getStorage("Wombat")) {
      localStorage.removeItem("Wombat");
    }

    await auth.handleSignOut();

    setActiveUserData(undefined);
    location.reload();
  };

  const setAuth = () => {
    const anchor = getStorage("Anchor");
    const wax = getStorage("Wax");
    const wombat = getStorage("Wombat");

    if (wax) {
      setActiveUserData(wax);
    }

    if (anchor) {
      setActiveUserData(anchor);
    }

    if (wombat) {
      setActiveUserData(wombat);
    }

    if (wax || anchor || wombat) {
      setIsLoading({
        stats: false,
        timestamp: 0,
      });
    }
  };
  const readQuery = () => {
    const { accountName, requestPermission, wallet } = router.query;

    if (accountName && requestPermission && wallet) {
      const tempObj = {
        accountName,
        requestPermission,
        wallet,
      };

      if (getStorage("Wax")) {
        removeStorage("Wax");
      }

      if (getStorage("Anchor")) {
        removeStorage("Anchor");
      }

      if (getStorage("Wombat")) {
        removeStorage("Wombat");
      }

      const str = upperFirst(String(wallet));

      setStorage(str, tempObj);
      setActiveUserData(tempObj);
    }
  };

  useEffect(() => {
    readQuery();
  }, [router]);

  const ActionService = ({ type, actions, successFunction }: IAuthService) => {
    switch (type) {
      case "wax":
        return new Promise((resolve, reject) => {
          const wax = new waxjs.WaxJS({
            rpcEndpoint: endpoint,
            tryAutoLogin: true,
          });

          wax
            .login()
            .then(() => {
              wax.api
                .transact(
                  {
                    actions,
                  },
                  {
                    blocksBehind: 3,
                    expireSeconds: 180,
                  },
                )
                .then(transactResult => {
                  successFunction()
                    .then(() => {
                      console.log("Success!");
                    })
                    .catch((error: any) => {
                      if (error) {
                        console.log(error);
                        toast.error("Error: " + error.message);
                      }
                    });
                  resolve(transactResult);
                })
                .catch((error: any) => {
                  if (error) {
                    console.log(error);
                    toast.error("Error: " + error.message);
                  }
                });
            })
            .catch((error: any) => {
              if (error) {
                console.log(error);
                if (error.message) {
                  toast.error("Error: " + error.message);
                } else {
                  toast.error(
                    "Transaction incomplete. Please disable your popup blocker.",
                  );
                }
              }
            });
        });
      case "anchor":
        return new Promise((resolve, reject) => {
          const auth = AuthService(endpoint, chainId, appname);
          const anchorLink = auth.anchorLink;
          return anchorLink.restoreSession(appname).then((session: any) => {
            session
              .transact(
                {
                  actions,
                },
                {
                  blocksBehind: 3,
                  expireSeconds: 180,
                },
              )
              .then((waxResponse: any) => {
                successFunction();
                resolve(waxResponse);
              })
              .catch((error: any) => {
                if (error) {
                  console.log(error);
                  if (error.message) {
                    toast.error("Error: " + error.message);
                  } else {
                    toast.error(
                      "Transaction incomplete. Please disable your popup blocker.",
                    );
                  }
                }
              });
          });
        });
      case "wombat":
        return new Promise((resolve, reject) => {
          wombatTransact(net, rpc, actions, successFunction)
            .then((response: any) => {
              resolve(response);
            })
            .catch((error: any) => {
              console.log(error);
            });
        });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAuth();
  }, []);

  useEffect(() => {
    if (isLoading.stats) {
      setAuth();
    }
  }, [isLoading, now]);

  useEffect(() => {
    if (now - isLoading.timestamp > 30000 && isLoading.stats) {
      setIsLoading({
        stats: false,
        timestamp: 0,
      });
    }
  }, [now, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        activeUserData,
        handleAnchorSignIn,
        handleLogout,
        handleWaxSignIn,
        ActionService,
        handleWombatSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
