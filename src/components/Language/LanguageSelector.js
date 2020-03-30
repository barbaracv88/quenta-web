import React, { useContext } from "react";
import { languageOptions } from "./Langs/langs";
import { LanguageContext } from "./LanguageContext";

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
      value={languageContext.name}
      className="select-leng"
    >
      {languageOptions.map(item => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
};
