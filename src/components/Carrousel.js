import React from 'react';
import Slider from "react-slick";
import TitleSection from '../components/TitleSection';
import Employee from '../components/Employee';





export default class Carrousel extends React.Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 4,
            speed: 500,
            autoplay:true,
          
          
            responsive: [
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  centerPadding: "-10px"
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  centerPadding: "-10px"
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          };
          return (
         
            <div className="container">
                 <div>
                  <TitleSection
                      category="Nuestro equipo"
                      description="En Quenta Solutions contamos con más de 25 años de experiencia en Consultoría de Negocio y Servicios Gestionados de IT,
                      lo que nos permite tener una Visión Completa del Negocio para abordar proyectos de Modernización, Innovación y Expansión."
                  />
                </div>
              <Slider {...settings}>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                href1="https://www.linkedin.com/in/arancha-s%C3%A1nchez-guti%C3%A9rrez-7391712b/"
                href2="mailto:arancha.sanchez@quenta.es"
                rrss_2="images/rrss-43.png"
                image="images/arancha.jpg"
                name="Arancha Sánchez"
                position="Key Account Manager"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                href1="https://www.linkedin.com/in/antonio-villarroel-a3074724/?originalSubdomain=es"
                href2="mailto:ajvillarroel.work@gmail.com"
                rrss_2="images/rrss-43.png"
                image="images/antonio.jpg"
                name="Antonio Villarroel"
                position="System Engineer"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                href1="https://www.linkedin.com/in/juanjavierrodriguez/"
                href2="mailto:javier.rodriguez@quenta.es"
                rrss_2="images/rrss-43.png"
                image="images/javier.jpg"
                name="Javier Rodríguez"
                position="Managing Director"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                href1="https://www.linkedin.com/in/iv%C3%A1n-pastor-58320920/"
                href2="mailto:ivan.pastor@quenta.es"
                rrss_2="images/rrss-43.png"
                image="images/ivan.jpg"
                name="Iván Pastor"
                position="Service Manager"
                />
                </div>

              </Slider>
            </div>
          );
    }
}
