import { type } from "os";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type AbiProviderProps = {
  endpoint: string;
  fetchBuiltin(): Promise<any>;
};

export type SignatureProviderProps = {
  getAvailableKeys(): Promise<any>;
  sign(value: any): Promise<any>;
};

export type RpcEndpointsProps = [
  {
    protocol: string;
    host: string;
    port: string;
  },
];

export type ChainProps = {
  chainId: string;
  rpcEndpoint: RpcEndpointsProps;
};

export interface ApiProps {
  abiProvider: AbiProviderProps;
  authorityProvider: AbiProviderProps;
  chainId: string;
  signatureProvider: SignatureProviderProps;
}

export interface ActiveUserProps {
  accountName: string;
  api: ApiProps;
  chain: ChainProps;
  pubKeys: string[];
  requestPermission: string;
  signTransaction: Function;
}

export interface ISWR {
  data: any;
  error: any;
  isValidating: boolean;
  isLoading: boolean;
}

export interface LayoutProviderProps {
  children: ReactNode;
}

export interface LanguageContextTypes {
  language: "EN" | "SP";
  setLanguage: Dispatch<SetStateAction<"EN" | "SP">>;
}

export interface IAtomicAssets {
  asset_id: string;
  owner: string;
  collection: {
    collection_name: string;
  };
  schema: {
    schema_name: string;
  };
  template: {
    template_id: string;
  };
  mutable_data: any;
  immutable_data: any;
  template_mint: string;
  data: any;
}

export interface IAssets {
  tools?: any;
  asset_id: number;
  owner: string;
  template: number;
  schema: string;
  collection: string;
  mutable_data: any;
  immutable_data: any;
  template_mint: number;
  data: any;
}

export interface IMedian {
  id: number;
  median: number;
  owner: string;
  timestamp: string;
  value: number;
}
export interface IUserBalanceWax {
  balance: string;
}

export interface ITableDataOptions {
  account: string;
  table: string;
  index?: any;
  secondary_index?: any;
  limit?: number;
  key_type?: string;
  reverse?: boolean;
  index_position?: number;
  scope?: string;
  isLimited?: boolean;
}
