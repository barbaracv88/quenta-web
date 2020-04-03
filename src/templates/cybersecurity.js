import React from "react";
// import _ from 'lodash';
import ServiceTemplate from "./../components/ServicesTemplate";

import { Layout } from "../components/index";
// import {markdownify, Link} from '../utils';

import {
  LanguageProvider,
  LanguageContext
} from "../components/Language/LanguageContext";
import { allLangs } from "../components/Language/Langs/langs";

export default class Cybersecurity extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <LanguageContext.Consumer>
          {language => (
            <div className="cybersecurity-template">
              <Layout {...this.props} language={language}>
                {/* <section id="main" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>

                    </div>
                </section> */}
                <ServiceTemplate
                  titletemplate1="IT Security Solutions & Cybersecurity"
                  subtitle={allLangs[language.name].subtitelCyber}
                  // img="images/img-apm.jpg"
                  textintroduction={allLangs[language.name].cyber1}
                  // img2="images/introduction2.jpg"
                  titletemplate3={allLangs[language.name].auditTec}
                  subtitle3={allLangs[language.name].auditTectext}
                  // img3="images/introduction3.jpg"
                  titletemplate4={allLangs[language.name].test}
                  subtitle4={allLangs[language.name].testtext}
                  titletemplate2={allLangs[language.name].Audit}
                  subtitle2={allLangs[language.name].subtAudit}
                  li1={allLangs[language.name].auditli1}
                  li2={allLangs[language.name].auditli2}
                  li3={allLangs[language.name].auditli3}
                  li4={allLangs[language.name].auditli4}
                  li5={allLangs[language.name].auditli5}
                  titletemplate5={allLangs[language.name].gestion}
                  subtitle5={allLangs[language.name].gestiontext}
                />
              </Layout>
            </div>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
  }
}
