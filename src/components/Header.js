import React, { useContext } from "react";
import { LanguageContext } from "../components/Language/LanguageContext";
import _ from "lodash";

import { classNames, Link } from "../utils";
// import Menu from "./Menu";
import { LanguageSelector } from "../components/Language/LanguageSelector";
import { allLangs } from "../components/Language/Langs/langs";

const Header = (props) => {
  const language = useContext(LanguageContext);
  return (
    <header
      id="header"
      className={classNames({
        alt:
          _.get(props, "pageContext.frontmatter.template") ===
          _.get(props, "pageContext.site.siteMetadata.landing_template")
      })}
    >
      <div id="logo">
        <a href="/">
          <img className="logo" src="../images/logo-quenta.png" alt=""></img>
        </a>

        {/* <Link to={_.get(this.props, 'pageContext.site.pathPrefix') || '/'}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link> */}
      </div>
      <LanguageSelector />
      <nav id="nav">
        {/* <Menu {...this.props} menu={menu} page={this.props.pageContext} language={language}  /> */}
        <ul>
          <li>
            <a href="/">{allLangs[language.name].inicio}</a>
          </li>
          <li className="opener">
            <a href="#services" className="submenu">
              {allLangs[language.name].servicios}
            </a>
            <ul>
              <li>
                <a href="/apm">Application Performance Management</a>
              </li>
              <li>
                <a href="/sam">Software Asset Management</a>
              </li>
              <li>
                <a href="/cybersecurity">
                  IT Security Solutions &amp; Cybersecurity
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Link to="#navPanel" className="navPanelToggle" />
    </header>
  );
};

export default Header;
