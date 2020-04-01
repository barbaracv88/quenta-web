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
 

export default class AvisoLegal extends React.Component {
    render() {
        return (
            <LanguageProvider>
            <LanguageContext.Consumer>
              {language => (
                  
          
                  <Layout {...this.props} language={language}>
             <div className="template">
                  <div className="header-template">
                    <h2 className="title-template" >{allLangs[language.name].h2}</h2>
                  </div>
                  <div className="terms">
                  <p>{allLangs[language.name].p1}</p>
<h3>{allLangs[language.name].h31}</h3>
<p>{allLangs[language.name].p2}</p>
<p>{allLangs[language.name].p3}</p>
<p>{allLangs[language.name].p4}</p>
<p>{allLangs[language.name].p5}</p>



<h3>{allLangs[language.name].h32}</h3>
<p>{allLangs[language.name].p6}</p>
<p>{allLangs[language.name].p7}</p>
<p>{allLangs[language.name].p8}</p>
<p>{allLangs[language.name].p9}</p>
<p>{allLangs[language.name].p10}</p>


<h3>{allLangs[language.name].h33}</h3>
<p>{allLangs[language.name].p11}</p>
<p>{allLangs[language.name].p12}</p>
<p>{allLangs[language.name].p13}</p>
<p>{allLangs[language.name].p14}</p>
<p>{allLangs[language.name].p15}</p>
<p>{allLangs[language.name].p16}</p>
<p>{allLangs[language.name].p17}</p>


<h3>{allLangs[language.name].h34}</h3>
<p>{allLangs[language.name].p18}</p>
<p>{allLangs[language.name].p19}</p>
<p>{allLangs[language.name].p20}</p>



<h3>{allLangs[language.name].h35}</h3>
<p>{allLangs[language.name].p21}</p>
<p>{allLangs[language.name].p22}</p>


</div>
            </div>
              </Layout>
                
               )}
             </LanguageContext.Consumer>
            </LanguageProvider>
        );
    }
}

