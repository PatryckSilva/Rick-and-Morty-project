import { Wax } from "@eosdacio/ual-wax";
import { Anchor } from "ual-anchor";

import { rede } from "../utils/rede";

// change this
export const appName = "front-end-model";

// change this
// chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4" or "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12"

export const myChainMain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "wax.cryptolions.io",
      port: "443",
    },
  ],
};
export const myChainTest = {
  chainId: "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "wax-testnet.cryptolions.io",
      port: "443",
    },
  ],
};

export const anchor = new Anchor(
  [rede === "mainet" ? (myChainMain as any) : (myChainTest as any)],
  {
    appName,
  } as any,
);

export const wax = new Wax(
  [rede === "mainet" ? (myChainMain as any) : (myChainTest as any)],
  {
    appName,
  } as any,
);
