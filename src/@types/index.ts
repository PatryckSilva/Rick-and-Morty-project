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

export type InfoType = {
  count: number;
  pages: number;
  next: string;
  prev: any;
};

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
