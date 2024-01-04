import { createContext, useEffect, useState } from "react";

import { LanguageContextTypes, LayoutProviderProps } from "../@types";

export const LanguageContext = createContext({} as LanguageContextTypes);

export const LanguageProvider = ({ children }: LayoutProviderProps) => {
  const [language, setLanguage] = useState<"EN" | "SP">("EN");
  useEffect(() => {
    switch (navigator.language) {
      case "es-ES":
        setLanguage("SP");
        break;
      case "en-US":
        setLanguage("EN");
        break;
      default:
        setLanguage("EN");
    }
  }, []);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
