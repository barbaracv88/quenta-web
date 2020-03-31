import React from 'react';
import TitleSection from '../components/TitleSection';


import { allLangs } from "../components/Language/Langs/langs";


export default class Contacto extends React.Component {
    render() {

        const { language } = this.props;


        return (
            
            <div className="contact" >
                <div className="title_contact">
                <TitleSection
                category={allLangs[language.name].title4}
            />
            </div>
            <div className="dates-contact">
            <div className="information">

                <div className="title_contact">
                <p>{allLangs[language.name].textContact}</p>
            </div>
                <div className="directions">
                    <div className="facts">
                    <div className="fact">
                            {/* <img src="images/direccion.png"></img> */}
                            <p>Paseo de la Castellana 141, Edificio Cuzco IV, Planta 19, 28046 Madrid</p>
                        </div>
                        <div className="fact">
                            {/* <img src="images/telefono.png"></img> */}
                            <p>910 498 013</p>
                        </div>

                    </div>
                    <div className="facts">
                    <div className="fact">
                            {/* <img src="images/direccion.png"></img> */}
                            <p>Calle Cidro 2, Planta 2, Oficina 3, 28044 Madrid</p>
                        </div>
                        <div className="fact">
                            {/* <img src="images/telefono.png"></img> */}
                            <p>910 516 779</p>
                        </div>

                    </div>
                    
                    </div>
                    <div className="fact_email">
                            {/* <img src="images/email.png"></img> */}
                            <p>info@quenta.es</p>
                        </div>
                </div>
  
            <form name="contact" netlify-honeypot="bot-field" data-netlify="true" method="post" action="thank-you" className="form">

                    <div className="item1">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" id="name" name="name" placeholder="Nombre (requerido)" required/>
                    </div>
                    <div className="item2">
                        <input type="email" id="mail" name="email" placeholder="Email (requerido)" required />
                    </div>
                    
                    <div className="item3">
                        <input type="text" id="tlf" name="telephosne" placeholder="Teléfono" />
                    </div>
                    <div className="form_2 item4">
                        <textarea id="msg" name="message" placeholder="Mensaje"></textarea>
                    </div>


                    <div className="button item5">
                    <button type="submit" value="Submit">{allLangs[language.name].buttonContact}</button>
                    </div>
                    <div className="item6">
                    <input type="checkbox" name="condiciones" id="acepto" required/><label htmlFor="acepto" >{allLangs[language.name].terms1}<a href="/privacy/">{allLangs[language.name].terms2}</a></label>
                    </div>

                </form>
                </div>
      </div>
        );
    }
}