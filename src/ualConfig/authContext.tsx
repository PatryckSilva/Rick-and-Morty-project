import { createContext, ReactNode, useEffect, useState } from "react";

import { ActiveUserProps } from "../@types";

type AuthContextData = {
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  activeUserData: ActiveUserProps | undefined;
};

type AuthProviderProps = {
  children: ReactNode;
  ualProps: any;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children, ualProps }: AuthProviderProps) => {
  const [activeUserData, setActiveUserData] = useState<ActiveUserProps>();

  const { ual } = ualProps;
  const { activeUser } = ual;
  useEffect(() => {
    if (activeUser) setActiveUserData(activeUser);
  }, [activeUser, ual]);

  const signIn = async () => {
    localStorage.clear();
    await ual.showModal();
    localStorage.setItem("expirationUAL", `${Date.now() + 259200 * 1000}`);
  };

  const signOut = async () => {
    localStorage.clear();
    await ual.logout();
    localStorage.removeItem("expirationUAL");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        activeUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
