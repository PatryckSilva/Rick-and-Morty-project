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

export interface IMutateOptions {
  key: any;
  currentData: any;
  fetcher: (url: string) => Promise<any>;
}
