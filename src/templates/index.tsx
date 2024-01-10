import { ReactNode, useEffect, useState } from "react";

import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";

interface Props {
  children: ReactNode;
}

export const MainTemplate = ({ children }: Props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Header offset={offset} />
      <div className=" flex min-h-screen flex-col">
        <div className="md:min-h-[calc(100vh - 100px)] mt-[50px] min-h-[calc(100vh-80px)] md:mt-[100px]">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
