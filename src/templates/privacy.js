import React from "react";
import _ from "lodash";
import ServiceTemplate from "./../components/ServicesTemplate";

import { Layout } from "../components/index";
import { markdownify, Link } from "../utils";

import {
  LanguageProvider,
  LanguageContext
} from "../components/Language/LanguageContext";
import { allLangs } from "../components/Language/Langs/langs";
 

export default class Privacy extends React.Component {
    render() {
        return (
            <LanguageProvider>
            <LanguageContext.Consumer>
              {language => (
                  
          
                  <Layout {...this.props} language={language}>
             <div className="template">
                  <div className="header-template">
                    <h2 className="title-template" >{allLangs[language.name].h2p}</h2>
                  </div>
                  <div className="terms">

<p>{allLangs[language.name].p1p}</p>
<p>{allLangs[language.name].p2p}</p>
<p>{allLangs[language.name].p3p}</p>
<p>{allLangs[language.name].p4p}</p>
<p>{allLangs[language.name].p5p}</p>
<p>{allLangs[language.name].p6p}</p>
<p>{allLangs[language.name].p7p}</p>
<p>{allLangs[language.name].p8p}</p>
<p>{allLangs[language.name].p9p}</p>
<p>{allLangs[language.name].p10p}</p>
<p>{allLangs[language.name].p11p}</p>
<p>{allLangs[language.name].p12p}</p>
</div>
            </div>
              </Layout>
                
               )}
             </LanguageContext.Consumer>
            </LanguageProvider>
        );
    }
}

