import React from 'react';
import Slider from "react-slick";
import TitleSection from '../components/TitleSection';





export default class Carrousel extends React.Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            mobileFirst:true,
            variableHeight: true,
            initialSlide: 0,
            autoplay:true,
          
          
            responsive: [
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: false,
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: false,

                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,

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
              <div className="employee"> 
                  <a href="https://www.linkedin.com/in/arancha-s%C3%A1nchez-guti%C3%A9rrez-7391712b/"  target="_blank">
                    <img className="rrss linkedin" src = "images/rrss-42.png" alt=""></img>
                  </a>
                  <a href="mailto:arancha.sanchez@quenta.es">
                    <img className="rrss mail" src = "images/rrss-43.png" alt=""></img>
                  </a>
                    
                  <img className="img_employee" src = "images/arancha.jpg" alt=""></img>    
                  <a>              
                  <p className="name">Arancha Sánchez</p>
                  <p className="position">Key Account Manager</p>
                  </a>
              </div>

              <div className="employee"> 

                  <a href="https://www.linkedin.com/in/antonio-villarroel-a3074724/?originalSubdomain=es"  target="_blank">
                    <img className="rrss linkedin" src = "images/rrss-42.png" alt=""></img>
                  </a>
                  <a href="mailto:ajvillarroel.work@quenta.es">
                    <img className="rrss mail" src = "images/rrss-43.png" alt=""></img>
                  </a>
                  
                  <img className="img_employee" src = "images/antonio.jpg" alt=""></img>
                  <a>
                  <p className="name">Antonio Villarroel</p>                 
                  <p className="position">System Engineer</p>
                  </a>
              </div>

              <div className="employee"> 
                  <a href="https://www.linkedin.com/in/juanjavierrodriguez/"  target="_blank">
                    <img className="rrss linkedin" src = "images/rrss-42.png" alt=""></img>
                  </a>
                  <a href="mailto:javier.rodriguez@quenta.es">
                    <img className="rrss mail" src = "images/rrss-43.png" alt=""></img>
                  </a>
                  
                  <img className="img_employee" src = "images/javier.jpg" alt=""></img>
                  <a>
                  <p className="name">Javier Rodríguez</p>
                  <p className="position">Managing Director</p>
                  </a>
              </div>

              <div className="employee"> 
                  <a href="https://www.linkedin.com/in/iv%C3%A1n-pastor-58320920/"  target="_blank">
                    <img className="rrss linkedin" src = "images/rrss-42.png" alt=""></img>
                  </a>
                  <a href="mailto:ivan.pastor@quenta.es">
                    <img className="rrss mail" src = "images/rrss-43.png" alt=""></img>
                  </a>
                
                  <img className="img_employee" src = "images/ivan.jpg" alt=""></img>
                  <a>
                  <p className="name">Iván Pastor</p>
                  <p className="position">Service Manager</p>
                  </a>
              </div>

              <div className="employee"> 
                  <a href="https://www.linkedin.com/in/mar%C3%ADa-dolores-bola%C3%B1os-ortega-07a3334a/"  target="_blank">
                    <img className="rrss linkedin" src = "images/rrss-42.png" alt=""></img>
                  </a>
                  <a href="mailto:maria.bolaños@quenta.es">
                    <img className="rrss mail" src = "images/rrss-43.png" alt=""></img>
                  </a>
                     
                  <img className="img_employee" src = "images/maria.jpg" alt=""></img>
                  <a>
                  <p className="name">María Bolaños</p>     
                  <p className="position">Business Consultant</p>
                  </a>
              </div>

              </Slider>
            </div>
          );
    }
}
