"use client";


import { MainTemplate } from "@/templates";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <ThemeProvider attribute="class">
      <MainTemplate>{children}</MainTemplate>
    </ThemeProvider>
  );
};
