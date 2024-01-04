import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import useSWR from "swr";
import { getStorage, setStorage } from "utils-react";

import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "../hooks/useCurrentUser";
import {
  atomicFetcher,
  bloksFetcher,
  SWRCacheKeyGetters,
} from "../services/swr";
import { rede } from "../utils/rede";

interface IFetchProvider {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FetchContextProps {}
// https://aa.neftyblocks.com/atomicassets/v1/assets?collection_name= or https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=

export const FetchContext = createContext({} as FetchContextProps);

export const FetchProvider = ({ children }: IFetchProvider) => {
  const { currentUser } = useCurrentUser();

  return <FetchContext.Provider value={{}}>{children}</FetchContext.Provider>;
};
