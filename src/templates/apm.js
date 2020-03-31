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

export default class Apm extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <LanguageContext.Consumer>
          {language => (
            <div className="apm-template">
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
                  titletemplate1="Application Performance Management"
                  subtitle={allLangs[language.name].subtitleApm}
                  // img="images/img-apm.jpg"
                  textintroduction={allLangs[language.name].apm1}
                  subtext={allLangs[language.name].apm2}
                  titletemplate2={allLangs[language.name].monit}
                  subtitle2={allLangs[language.name].subMonit}
                  li1={allLangs[language.name].li1}
                  li2={allLangs[language.name].li2}
                  li3={allLangs[language.name].li3}
                  li4={allLangs[language.name].li4}
                  li5={allLangs[language.name].li5}
                  li6={allLangs[language.name].li6}
                  li7={allLangs[language.name].li7}
                  img_icon1="../images/one.svg"
                  description_icon1={allLangs[language.name].icons1}
                  img_icon2="../images/two.svg"
                  description_icon2={allLangs[language.name].icons2}
                  img_icon3="../images/three.svg"
                  description_icon3={allLangs[language.name].icons3}
                  img_icon4="../images/four.svg"
                  description_icon4={allLangs[language.name].icons4}
                  img_icon5="../images/five.svg"
                  description_icon5={allLangs[language.name].icons5}
                  // img2="images/introduction2.jpg"
                  titletemplate3={allLangs[language.name].automat}
                  subtitle3={allLangs[language.name].automatText}
                  // img3="images/introduction3.jpg"
                  titletemplate4={allLangs[language.name].analisis}
                  subtitle4={allLangs[language.name].analisisText}
                />
              </Layout>
            </div>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
  }
}
