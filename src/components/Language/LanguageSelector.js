import React, { useContext, useState } from "react";
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
  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
      const comparison = a[key].localeCompare(b[key]);

      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  let order = languageContext.name === "es" ? "desc" : "asc";
  let opt = languageOptions.sort(compareValues("id", order));

  return (
    <select
      onChange={handleLanguageChange}
      value={
        isBrowser() && window.localStorage.getItem("lang")
          ? isBrowser() && window.localStorage.getItem("lang")
          : languageContext.name
      }
      className="select-leng"
    >
      {opt.map(item => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
};
