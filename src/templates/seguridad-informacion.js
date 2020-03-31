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
 

export default class SeguridadInformacion extends React.Component {
    render() {
        return (
            <LanguageProvider>
            <LanguageContext.Consumer>
              {language => (
                  
          
                  <Layout {...this.props} language={language}>
             <div className="template">
                  <div className="header-template">
                    <h2 className="title-template" >{allLangs[language.name].h2s}</h2>
                  </div>
                  <div className="terms">

<p>{allLangs[language.name].p1s}</p>
<p>{allLangs[language.name].p2s}</p>
<p>{allLangs[language.name].p3s}</p>
<p>{allLangs[language.name].p4s}</p>
<p>{allLangs[language.name].p5s}</p>
<p>{allLangs[language.name].p6s}</p>
<p>{allLangs[language.name].p7s}</p>
<p>{allLangs[language.name].p8s}</p>
<p>{allLangs[language.name].p9s}</p>
<p>{allLangs[language.name].p10s}</p>
<p>{allLangs[language.name].p11s}</p>
<p>{allLangs[language.name].p12s}</p>
<p>{allLangs[language.name].p13s}</p>
</div>
            </div>
              </Layout>
                
               )}
             </LanguageContext.Consumer>
            </LanguageProvider>
        );
    }
}

