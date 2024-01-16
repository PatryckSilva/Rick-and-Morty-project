"use client";
import { ReactNode } from "react";

import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";

interface Props {
  children: ReactNode;
}

export const MainTemplate = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <div className="flex min-h-screen flex-col">
        <div className="md:min-h-[calc(100vh - 100px)] mt-[50px] min-h-[calc(100vh-80px)] md:mt-[100px]">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};
