import React from "react";
import Service from "./Service";
import Plx from "react-plx";

import { allLangs } from "../components/Language/Langs/langs";

const parallaxAPM = [
  {
    start: 0,
    end: 1600,
    properties: [
      {
        startValue: -150,
        endValue: 100,
        property: "translateY"
      }
    ]
  }
];
export default class Apm extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <div className="apm">
        <Plx className="Parallax" parallaxData={parallaxAPM}>
          <img
            className="img_service"
            src="images/pantalla-generica.png"
            alt=""
          ></img>
        </Plx>
        <Service
        language={language} 
          // img="images/amp.png"
          breadcrumb={allLangs[language.name].breadcrumb1}
          title="Application Performance Management"
          description={allLangs[language.name].description1}
          img_icon1="images/apm-icon1.png"
          description_icon1={allLangs[language.name].description_icon1}
          img_icon2="images/apm-icon2.png"
          description_icon2={allLangs[language.name].description_icon2}
          img_icon3="images/apm-icon3.png"
          description_icon3={allLangs[language.name].description_icon3}
          img_icon4="images/apm-icon4.png"
          description_icon4={allLangs[language.name].description_icon4}
          link="/apm/"
        />
      </div>
    );
  }
}
