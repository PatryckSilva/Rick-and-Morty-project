import { ReactNode } from "react";

export interface ISWR {
  data: any;
  error: any;
  isValidating: boolean;
  isLoading: boolean;
}

export interface LayoutProviderProps {
  children: ReactNode;
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
