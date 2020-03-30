import React from "react";
import TitleSection from "../components/TitleSection";
import Cybersecurity from "../components/Cybersecurity";
import Sassetm from "../components/Sassetm";
import Apm from "../components/Apm";
import { allLangs } from "../components/Language/Langs/langs";

export default class Services extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <div className="services" name="services">
        <TitleSection
          category="Nuestros servicios"
          description="Te ayudamos a conseguir tus objetivos, en tus proyectos tecnológicos."
          language={language}
        />
        <Apm language={language} />
        <Sassetm language={language} />
        <Cybersecurity language={language} />
      </div>
    );
  }
}
