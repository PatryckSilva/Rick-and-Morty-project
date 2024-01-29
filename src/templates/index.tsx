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
        {children}
        <Footer />
      </div>
    </main>
  );
};
