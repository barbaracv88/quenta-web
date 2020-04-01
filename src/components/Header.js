import React from "react";
import _ from "lodash";

import { classNames, Link } from "../utils";
// import Menu from "./Menu";

import { LanguageSelector } from "../components/Language/LanguageSelector";

import { allLangs } from "../components/Language/Langs/langs";


export default class Header extends React.Component {
  render() {
    let menu = _.get(this.props, "pageContext.menus.main");
    const { language } = this.props;

    return (
      <header
        id="header"
        className={classNames({
          alt:
            _.get(this.props, "pageContext.frontmatter.template") ===
            _.get(this.props, "pageContext.site.siteMetadata.landing_template")
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
            <a href="#services" className="submenu">{allLangs[language.name].servicios}</a>
                <ul>
                  <li>
                  <a href="/apm" >Application Performance Management</a>
                  </li>
                  <li>
                  <a href="/sam" >Software Asset Management</a>
                  </li>
                  <li>
                  <a href="/cybersecurity" >IT Security Solutions &amp; Cybersecurity</a></li>                  
                </ul>
              </li>
          </ul>
        </nav>
        <Link to="#navPanel" className="navPanelToggle" />
      </header>
    );
  }
}
