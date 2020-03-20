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
              <div>
                 
                    
                  <img className="img_employee" src = "images/arancha.jpg" alt=""></img>
                  
                  <p className="name">Arancha Sánchez</p>
                  </div> 
                  <p className="position">Key Account Manager</p>
                  
              </div>

              <div className="employee"> 
              <div>
              
                  
                  <img className="img_employee" src = "images/antonio.jpg" alt=""></img>
                  
                  <p className="name">Antonio Villarroel</p>
                  </div>   
                  <p className="position">System Engineer</p>
                 
              </div>

              <div className="employee"> 
              <div>
              
                   
                  <img className="img_employee" src = "images/javier.jpg" alt=""></img>
                  <p className="name">Javier Rodríguez</p>
                  </div> 
                  <p className="position">Managing Director</p>
                  
              </div>

              <div className="employee"> 
              <div>
              
                  <img className="img_employee" src = "images/ivan.jpg" alt=""></img>
                  <p className="name">Iván Pastor</p>
                  </div>
                  <p className="position">Service Manager</p>
                
              </div>

              <div className="employee"> 
              <div>
            
                     
                  <img className="img_employee" src = "images/maria.jpg" alt=""></img>
                  <p className="name">María Bolaños</p>
                  </div>  
                  <p className="position">Business Consultant</p>
                  
              </div>

              </Slider>
            </div>
          );
    }
}
