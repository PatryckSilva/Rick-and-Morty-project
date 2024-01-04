import React, { createContext, useContext, useEffect } from "react";

// Define a type for your context data
type LocalStorageContextData = {
  setLocalStorageWithExpiration: (
    key: string,
    value: any,
    expirationMinutes: number,
  ) => void;
  getLocalStorageWithExpiration: (key: string) => string | null;
};

// Create the context
const LocalStorageContext = createContext<LocalStorageContextData | undefined>(
  undefined,
);

// Create a provider component
export const LocalStorageProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  useEffect(() => {
    // Your context initialization code, if needed
    // localStorage.setItem("test", "test");
  }, []);

  // Define functions for getting and setting items in localStorage

  function setLocalStorageWithExpiration(
    key: string,
    value: any,
    expirationMinutes: number,
  ): void {
    const expirationTimestamp =
      new Date().getTime() + expirationMinutes * 60000;
    localStorage.setItem(key, JSON.stringify({ value, expirationTimestamp }));
  }

  function getLocalStorageWithExpiration(key: string) {
    const item = JSON.parse(localStorage.getItem(key) || "null");
    if (!item) return null;

    const { value, expirationTimestamp } = item;
    if (new Date().getTime() > expirationTimestamp) {
      localStorage.removeItem(key);
      return null;
    }

    return value;
  }

  // Create an object with the functions to provide to consumers
  const contextValue: LocalStorageContextData = {
    setLocalStorageWithExpiration,
    getLocalStorageWithExpiration,
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorage must be used within a LocalStorageProvider",
    );
  }
  return context;
};
