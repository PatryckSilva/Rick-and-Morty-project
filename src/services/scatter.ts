import ScatterJS from "@scatterjs/core";
import { Api } from "eosjs";
import toast from "react-hot-toast";

import { setStorage } from "../utils";
import { config } from "../utils/constants";
import { rede } from "../utils/rede";

export const wombatSignIn = (net: any) => {
  const appname = rede === "mainet" ? config.appNameMainet : config.appNameTest;
  const network = ScatterJS.Network.fromJson(net);
  ScatterJS.connect(appname, { network }).then(connected => {
    if (!connected) return false;
    ScatterJS.login().then((identity: any) => {
      const element = identity.accounts?.find(
        item => item.blockchain === "eos",
      );

      const account = {
        accountName: element.name,
        requestPermission: element.authority,
        wallet: "wombat",
      };

      setStorage("Wombat", account);
    });
  });
};

export const wombatTransact = async (
  network: any,
  rpc: any,
  actions: any[],
  success: any,
) => {
  const appName = rede === "mainet" ? config.appNameMainet : config.appNameTest;
  ScatterJS.connect(appName, { network }).then(connected => {
    if (!connected) return console.error("no scatter");

    const eos = ScatterJS.eos(network, Api, { rpc });

    ScatterJS.login().then(id => {
      if (!id) return console.error("no identity");
      const account = ScatterJS.account("eos");

      const currentActions: any[] = [];
      actions.forEach(item => {
        const authorization = [
          {
            actor: account.name,
            permission: account.authority,
          },
        ];

        const data = {
          ...item,
          authorization,
        };

        currentActions.push(data);
      });

      eos
        .transact(
          {
            actions: currentActions,
          },
          {
            blocksBehind: 3,
            expireSeconds: 30,
          },
        )
        .then(res => {
          success();
        })
        .catch(err => {
          if (err.message) {
            toast.error("Error: " + err.message);
          } else {
            toast.error(
              "Transaction incomplete. Please disable your popup blocker.",
            );
          }
        });
    });
  });
};
