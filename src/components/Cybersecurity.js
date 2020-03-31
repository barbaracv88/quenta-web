import React from 'react';
import Service from './Service';
import Plx from 'react-plx';

import { allLangs } from "../components/Language/Langs/langs";


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
      const { language } = this.props;
        return (
        <div className="cybersecurity">
                
            <Plx
                className='Parallax'
                parallaxData={ parallaxCiber }
                >
                <img className="img_service" src="images/csec-06.png" alt=""></img>       
            </Plx>

            <Service
            language={language} 
            // img="images/csec.png"
            breadcrumb={allLangs[language.name].breadcrumb3}
            title = 'Cybersecurity & IT Security Solutions'
            description={allLangs[language.name].description3}
            link="/cybersecurity/"
            img_icon1="images/icon-cyber-02.png"
            description_icon1="Pentesting"
            img_icon2="images/icon-cyber-05.png"
            description_icon2="Code Audit"
            img_icon3="images/icon-cyber-04.png"
            description_icon3="Vulnerability Management"
            img_icon4="images/icon-cyber-03.png"
            description_icon4="Cibersecurity Office"
            />
        </div>
      
        )
    }
}