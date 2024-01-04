import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { config } from "../utils/constants";
import { rede } from "../utils/rede";

interface IApiProvider {
  children: ReactNode;
}

interface ApiContextProps {
  api: string;
  setApi: Dispatch<SetStateAction<string>>;
}
// https://aa.neftyblocks.com/atomicassets/v1/assets?collection_name= or https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=

export const ApiContext = createContext({} as ApiContextProps);

export const ApiProvider = ({ children }: IApiProvider) => {
  const [api, setApi] = useState(
    rede === "mainet" ? config.atomicMainet : config.atomicTestnet,
  );

  return (
    <ApiContext.Provider value={{ api, setApi }}>
      {children}
    </ApiContext.Provider>
  );
};
