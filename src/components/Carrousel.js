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
                breakpoint: 1024,
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
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez 1"
                position="CEO"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez "
                position="CEO"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez "
                position="CEO"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez "
                position="CEO"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez "
                position="CEO"
                />
                </div>
                <div>
                <Employee
                rrss_1="images/rrss-42.png"
                rrss_2="images/rrss-43.png"
                image="images/retrato.jpg"
                name="Andres Gómez "
                position="CEO"
                />
                </div>
              </Slider>
            </div>
          );
    }
}
