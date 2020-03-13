import React from 'react';
import Service from './Service';
import Plx from 'react-plx';

const parallaxCiber = [
    {
        start: 0,
        end: 5100,
        properties: [
          {
            startValue: 600,
            endValue: -900,
            property: 'translateY',
          },
        ],
      },
  ];

export default class Cybersecurity extends React.Component {
    render() {
        return (
        <div className="cybersecurity">
                
            <Plx
                className='Parallax'
                parallaxData={ parallaxCiber }
                >
                <img className="img_service" src="images/csec.png"></img>       
            </Plx>

            <Service
            // img="images/csec.png"
            breadcrumb="SERVICIOS  >  CSEC"
            title = 'Cybersecurity & IT Security Solutions'
            description="Proporcionamos servicios especializados en el ámbito de la ciberseguridad basados en auditorías técnicas, pentesting, auditorías de código y gestión de las vulnerabilidades, incluyendo servicios basados en soluciones SIEM (System Information and Events Management) y SVM (Software Vulnerability Management)."
            link="/cybersecurity/"
            />
        </div>
      
        )
    }
}