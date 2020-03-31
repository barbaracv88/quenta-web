import React from 'react';
import Service from './Service';
import Plx from 'react-plx';

import { allLangs } from "../components/Language/Langs/langs";


const parallaxSAM = [
    {
      start: 100,
      end: 2900,
      properties: [
        {
          startValue: 550,
          endValue: -400,
          property: 'translateY',
        },
      ],
    },
  ];
  const parallaxSAM2 = [
    {
      start: 1000,
      end: 1800,
      properties: [
        {
          startValue: 180,
          endValue: -800,
          property: 'translateY',
        },
      ],
    },
  ];
export default class Sassetm extends React.Component {
    render() {
      const { language } = this.props;

        return (
        <div className="sam">
            <div>

                <img className="img_service_fondo" src="images/fondo-sam.png"></img>   
           
                <Plx
                className='Parallax'
                parallaxData={ parallaxSAM2 }
                >
            <img className="img_service" src="images/pantalla-sam.png"></img>    
            </Plx>   
            </div>
            <Service
            language={language} 
            // img="images/sam.png"
            breadcrumb={allLangs[language.name].breadcrumb2}
            title = 'Software Asset Management'
            description={allLangs[language.name].description2}
            img_icon1="images/assessment.png"
            description_icon1="Assessment"
            img_icon2="images/management.png"
            description_icon2="Management"
            img_icon3="images/strategy.png"
            description_icon3="Strategy
            And Protection"
            link="/sam/"
            />
            
        </div>
      
        )
    }
}