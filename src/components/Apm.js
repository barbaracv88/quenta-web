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
          // img="images/amp.png"
          breadcrumb="SERVICIOS  >  APM"
          title={allLangs[language.name].header1}
          description="Proporcionamos servicios de valor añadido basados en soluciones de Monitorización de Aplicaciones (APM) que permiten a las compañías realizar un seguimiento, en tiempo real, de todas las transacciones
            de negocio en función de la experiencia del usuario (real o sintético), independientemente de la tecnología e infraestructura utilizada."
          img_icon1="images/apm-icon1.png"
          description_icon1="Rendimiento de entornos
            Cloud y virtulizados"
          img_icon2="images/apm-icon2.png"
          description_icon2="Monitorización IT
            FullStack"
          img_icon3="images/apm-icon3.png"
          description_icon3="Consultoría de negocio
            basada en APM"
          img_icon4="images/apm-icon4.png"
          description_icon4="Control sobre Contenedores
            y Microservicios
            "
          link="/apm/"
        />
      </div>
    );
  }
}
