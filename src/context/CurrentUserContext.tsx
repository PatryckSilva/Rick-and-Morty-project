import { useRouter } from "next/router";
import { createContext, useEffect } from "react";

import { LayoutProviderProps } from "../@types";
import { useAuth } from "../hooks/useAuth";

interface IActiveTeamsContextTypes {
  currentUser: string;
}
export const CurrentUserContext = createContext({} as IActiveTeamsContextTypes);

export const CurrentUserProvider = ({ children }: LayoutProviderProps) => {
  const { activeUserData } = useAuth();
  const router = useRouter();
  const query = router.query;

  const currentUser = query?.forcewallet
    ? (query?.forcewallet as string)
    : activeUserData?.accountName || "";

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
