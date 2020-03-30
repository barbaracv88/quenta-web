import React from 'react';
import TitleSection from '../components/TitleSection';
import Cybersecurity from '../components/Cybersecurity';
import Sassetm from '../components/Sassetm';
import Apm from '../components/Apm';
import {LanguageProvider} from "../components/Language/LanguageContext"



export default class Services extends React.Component {
    render() {
        return (
            <LanguageProvider>
            <div className="services" name="services">


                    <TitleSection
                      category="Nuestros servicios"
                      description="Te ayudamos a conseguir tus objetivos, en tus proyectos tecnológicos."
                  />
                  <Apm/>
                    <Sassetm/>
                     <Cybersecurity/>
            </div>
            </LanguageProvider>
                );
            }
}