import React from "react";
import _ from "lodash";
import Alliances from "../components/Alliances";
import Carrousel from "../components/Carrousel2";
import Services from "../components/Services";
import components, { Layout } from "../components/index";
import Banner from "../components/Banner";
import Contacto from "../components/Contact";


import {
  LanguageProvider,
  LanguageContext
} from "../components/Language/LanguageContext";

export default class Home extends React.Component {
  render() {
    

    return (
      <LanguageProvider>
        <LanguageContext.Consumer>
          {language => (
            <Layout {...this.props} language={language}>
              <Banner {...this.props} language={language} />
              {_.map(
                _.get(this.props, "pageContext.frontmatter.sections"),
                (section, section_idx) => {
                  let GetSectionComponent =
                    components[_.get(section, "component")];
                  return (
                    <GetSectionComponent
                      key={section_idx}
                      {...this.props}
                      section={section}
                      page={this.props.pageContext}
                      site={this.props.pageContext.site}
                      language={language}
                    />
                  );
                }
              )}
              <Services language={language} />
              <Alliances language={language} />
              <Carrousel language={language} />
              <Contacto language={language} />
            </Layout>
          )}
        </LanguageContext.Consumer>
      </LanguageProvider>
    );
  }
}
