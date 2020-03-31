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
 

export default class PoliticaCalidad extends React.Component {
    render() {
        return (
            <LanguageProvider>
            <LanguageContext.Consumer>
              {language => (
                  
          
                  <Layout {...this.props} language={language}>
             <div className="template">
                  <div className="header-template">
                    <h2 className="title-template" >{allLangs[language.name].h2ca}</h2>
                  </div>
                  <div className="terms">

<p>{allLangs[language.name].p1ca}</p>
<p>{allLangs[language.name].p2ca}</p>
<p>{allLangs[language.name].p3ca}</p>
<p>{allLangs[language.name].p4ca}</p>
<p>{allLangs[language.name].p5ca}</p>
<p>{allLangs[language.name].p6ca}</p>
<p>{allLangs[language.name].p7ca}</p>
<p>{allLangs[language.name].p8ca}</p>
<p>{allLangs[language.name].p9ca}</p>
<p>{allLangs[language.name].p10ca}</p>
<p>{allLangs[language.name].p11ca}</p>
<p>{allLangs[language.name].p12ca}</p>
<p>{allLangs[language.name].p13ca}</p>
<p>{allLangs[language.name].p14ca}</p>
<p>{allLangs[language.name].p15ca}</p>
<p>{allLangs[language.name].p16ca}</p>
<p>{allLangs[language.name].p17ca}</p>


</div>
            </div>
              </Layout>
                
               )}
             </LanguageContext.Consumer>
            </LanguageProvider>
        );
    }
}

