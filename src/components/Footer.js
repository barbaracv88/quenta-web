import React, { useContext } from "react";
import { LanguageContext } from "../components/Language/LanguageContext";
import { allLangs } from "../components/Language/Langs/langs";

const Footer = props => {
  const language = useContext(LanguageContext);
  return (
    <footer id="footer">
      <div className="content">
        <p className="copyright">
          {allLangs[language.name].textFooter}
          <a href="/privacy/"> {allLangs[language.name].link1} </a> |
          <a href="/aviso-legal/"> {allLangs[language.name].link2} </a> |
          <a href="/seguridad-informacion/">
            {" "}
            {allLangs[language.name].link3}{" "}
          </a>{" "}
          |<a href="/cookies/"> {allLangs[language.name].link4} </a> |
          <a href="/politica-calidad/"> {allLangs[language.name].link5} </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
