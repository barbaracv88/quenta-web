import React from 'react';
import Service from './Service';

export default class Cybersecurity extends React.Component {
    render() {
        return (
        <div>
            
            <Service
            img="images/csec.png"
            breadcrumb="SERVICIOS > CSEC"
            title = "Cybersecurity & IT Security Solutions"
            description="Proporcionamos servicios especializados en el ámbito de la ciberseguridad basados en auditorías técnicas, pentesting, auditorías de código y gestión de las vulnerabilidades, incluyendo servicios basados en soluciones SIEM (System Information and Events Management) y SVM (Software Vulnerability Management)."
            />
        </div>
      
        )
    }
}