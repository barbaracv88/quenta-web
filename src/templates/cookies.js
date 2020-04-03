import React from "react";
// import _ from "lodash";
// import ServiceTemplate from "./../components/ServicesTemplate";

import { Layout } from "../components/index";
// import { markdownify, Link } from "../utils";

import {
  LanguageProvider,
  LanguageContext
} from "../components/Language/LanguageContext";
import { allLangs } from "../components/Language/Langs/langs";

export default class Cookies extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <LanguageContext.Consumer>
          {language => (
            <Layout {...this.props} language={language}>
              <div className="template">
                <div className="header-template">
                  <h2 className="title-template">
                    {allLangs[language.name].h2c}
                  </h2>
                </div>
                <div className="terms">
                  <p>{allLangs[language.name].p1c}</p>

                  <h3>{allLangs[language.name].h31c}</h3>
                  <p>{allLangs[language.name].p2c}</p>

                  <h3>{allLangs[language.name].h32c}</h3>
                  <p>{allLangs[language.name].p3c}</p>

                  <h3>{allLangs[language.name].h33c}</h3>
                  <p>{allLangs[language.name].p4c}</p>
                </div>
              </div>
            </Layout>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
  }
}
