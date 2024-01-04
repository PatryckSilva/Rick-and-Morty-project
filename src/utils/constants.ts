import { rede } from "./rede";

export const accountToken = "tokename";
export const waxAccountToken = "eosio.token";

export const IFPS_URL = "https://atomichub-ipfs.com/ipfs/";

export const config = {
  contractAccountMainet: process.env.contractAccountMainet as string,
  contractAccountTestnet: process.env.contractAccountTestnet as string,
  collectionNameMainet: process.env.collectionNameMainet as string,
  collectionNameTestnet: process.env.collectionNameTestnet as string,
  atomicTestnet: process.env.atomicTestnet as string,
  atomicMainet: process.env.atomicMainet as string,
  bloksTestnet: process.env.bloksTestnet as string,
  bloksMainet: process.env.bloksMainet as string,
  ga_tracking_id: process.env.ga_tracking as string,
  chainIdMainet: process.env.chainIdMainet as string,
  chainIdTestnet: process.env.chainIdTestnet as string,
  appNameTest: process.env.appNameTest as string,
  appNameMainet: process.env.appNameMainet as string,
  host: process.env.host as string,
};

export const tablesApi = {
  // Old Routes
  // templates: `${process.env.draftEndpoint}/api/v1/rows/blendcfg`,
};

export const collectionRoutes = {};

export const statusRoutes = {};
