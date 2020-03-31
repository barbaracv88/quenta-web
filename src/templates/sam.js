import React from 'react';
import _ from 'lodash';
import ServiceTemplate from './../components/ServicesTemplate';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';


import {
    LanguageProvider,
    LanguageContext
  } from "../components/Language/LanguageContext";
  import { allLangs } from "../components/Language/Langs/langs";


export default class sam extends React.Component {
    render() {
        return (

            <LanguageProvider>
            <LanguageContext.Consumer>
              {language => (

            <div className="sam-template">
<Layout {...this.props}>
            {/* <section id="main" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>

                    </div>
                </section> */}
                <ServiceTemplate
                titletemplate1="Software Asset Management"
                subtitle={allLangs[language.name].subtitleSam}
                // img="images/img-apm.jpg"
                textintroduction={allLangs[language.name].sam1}
                subtext={allLangs[language.name].sam2}
                titletemplate2={allLangs[language.name].infoSam}
                li1={allLangs[language.name].li1}
                li2={allLangs[language.name].li2}
                li3={allLangs[language.name].li3}
                li4={allLangs[language.name].li4}
                li5={allLangs[language.name].li5}
                li6={allLangs[language.name].li6}
                li7={allLangs[language.name].li7}
                li8={allLangs[language.name].li8}



                // img2="images/introduction2.jpg"
                titletemplate3={allLangs[language.name].Tic}
                subtitle3={allLangs[language.name].subtitleTic}

                li11={allLangs[language.name].ticli1}
                li61={allLangs[language.name].ticli6}
                li21={allLangs[language.name].ticli2}
                li81={allLangs[language.name].ticli8}
                li31={allLangs[language.name].ticli3}
                li51={allLangs[language.name].ticli5}
                li41={allLangs[language.name].ticli4}
                li71={allLangs[language.name].ticli7}
                />
            </Layout>
            </div>
                                  )}
                                  </LanguageContext.Consumer>
                                </LanguageProvider>
        );
    }
}

