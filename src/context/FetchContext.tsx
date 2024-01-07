import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import useSWR from "swr";
import { getStorage, setStorage } from "utils-react";

import { atomicFetcher, SWRCacheKeyGetters } from "../services/swr";

interface IFetchProvider {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FetchContextProps {}
// https://aa.neftyblocks.com/atomicassets/v1/assets?collection_name= or https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=

export const FetchContext = createContext({} as FetchContextProps);

export const FetchProvider = ({ children }: IFetchProvider) => {
  return <FetchContext.Provider value={{}}>{children}</FetchContext.Provider>;
};
