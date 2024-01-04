import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { config } from "../utils/constants";
import { rede } from "../utils/rede";

interface IEndpointProvider {
  children: ReactNode;
}

interface EndContextType {
  endpoint: string;
  setEndpoint: Dispatch<SetStateAction<string>>;
}

export const EndpointContext = createContext({} as EndContextType);

// https://wax.cryptolions.io/
// http://wax-testnet.cryptolions.io/ or https://testnet.waxsweden.org/
export const EndpointProvider = ({ children }: IEndpointProvider) => {
  const [endpoint, setEndpoint] = useState(
    rede === "mainet" ? config.bloksMainet : config.bloksTestnet,
  );

  return (
    <EndpointContext.Provider value={{ endpoint, setEndpoint }}>
      {children}
    </EndpointContext.Provider>
  );
};
