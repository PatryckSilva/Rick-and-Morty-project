import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "../styles/globals.css";
import "../styles/typography.css";
import "regenerator-runtime/runtime.js";

import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { FetchProviders } from "../hooks/FetchProvider";
import { MainTemplate } from "../templates";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <RenderFetchs />
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
      <Toaster
        toastOptions={{
          // Define default options
          duration: 5000,
          position: "top-right",
        }}
        gutter={15}
      />
    </ThemeProvider>
  );
}

export default MyApp;

const RenderFetchs = () => {
  FetchProviders();

  return <></>;
};
