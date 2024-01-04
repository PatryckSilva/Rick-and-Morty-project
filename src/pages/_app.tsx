import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "../styles/globals.css";
import "../styles/typography.css";
import "../styles/loaderStyles.css";
import "../styles/tooltipStyles.css";
import "../styles/checkboxStyles.css";
import "../styles/market.css";
import "../styles/flipCards.css";
import "../styles/modal.scss";
import "../styles/switchMode.scss";
import "../styles/toast.css";
import "regenerator-runtime/runtime.js";

import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Analytics from "../components/Analytics";
import { ApiProvider } from "../context/ApiContext";
import { AuthProvider } from "../context/AuthContext";
import { CurrentUserProvider } from "../context/CurrentUserContext";
import { EndpointProvider } from "../context/EndPointContext";
import { FetchProvider } from "../context/FetchContext";
import { LanguageProvider } from "../context/LanguageContext";
import { LocalStorageProvider } from "../context/LocalStorage";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <AuthProvider>
      <ApiProvider>
        <EndpointProvider>
          <CurrentUserProvider>
            <FetchProvider>
              <LocalStorageProvider>
                <LanguageProvider>
                  <ThemeProvider attribute="class">
                    <>
                      <Component {...pageProps} />
                      <Analytics />
                    </>{" "}
                    <Toaster
                      toastOptions={{
                        // Define default options
                        duration: 5000,
                        position: "top-right",
                        className: "toast_container_basketball",
                      }}
                      gutter={15}
                    />
                  </ThemeProvider>
                </LanguageProvider>
              </LocalStorageProvider>
            </FetchProvider>
          </CurrentUserProvider>
        </EndpointProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default MyApp;
