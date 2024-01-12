"use client";

import { fetchProviders } from "./FetchProvider";
import { MainTemplate } from "@/templates";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  fetchProviders();
  return <MainTemplate>{children}</MainTemplate>;
};
