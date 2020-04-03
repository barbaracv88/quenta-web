import React, { useContext } from "react";
import { languageOptions } from "./Langs/langs";
import { LanguageContext, isBrowser } from "./LanguageContext";

export const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(
      item => item.id === event.target.value
    );
    languageContext.updateLanguage(selectedLanguage.id);
    localStorage.setItem("lang", selectedLanguage.id);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={
        isBrowser() && window.localStorage.getItem("lang")
          ? window.localStorage.getItem("lang")
          : languageContext.name
      }
      className="select-leng"
    >
      {languageOptions.map(item => {
        if (languageContext.name === item.id) {
          return (
            <option key={item.id} value={item.id} selected>
              {item.text}
            </option>
          );
        } else {
          return (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          );
        }
      })}
    </select>
  );
};
