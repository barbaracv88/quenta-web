import React from "react";
import TitleSection from "../components/TitleSection";
import Cybersecurity from "../components/Cybersecurity";
import Sassetm from "../components/Sassetm";
import Apm from "../components/Apm";
import Footer from "../components/Footer";

import { allLangs } from "../components/Language/Langs/langs";

export default class Services extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <div className="services" name="services">
        <TitleSection
          category={allLangs[language.name].title1}
          description={allLangs[language.name].subtitle1}
          language={language}
        />
        <Apm language={language} />
        <Sassetm language={language} />
        <Cybersecurity language={language} />
        <Footer 
                    language={language} 
                    />
      </div>
    );
  }
}
