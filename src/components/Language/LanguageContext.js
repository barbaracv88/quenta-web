import React, { useState, createContext } from "react";

export const isBrowser = () => typeof window !== "undefined";

export const LanguageContext = createContext({
  name: "es",
  updateLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    isBrowser() && window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "es"
  );

  return (
    <LanguageContext.Provider
      value={{
        name: language,
        updateLanguage: setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
