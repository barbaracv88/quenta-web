import React from 'react';
import TitleSection from '../components/TitleSection';




export default class Contacto extends React.Component {
    render() {
        return (
            
            <div className="contact" >
                <div className="title_contact">
                <TitleSection
                category="Podemos ayudarte"
            />
            </div>
            <div className="dates-contact">
            <div className="information">

                <div className="title_contact">
                <p>Si estás interesado en ampliar información o quieres trabajar con nosotros, no dudes en ponerte en contacto en:</p>
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
                    <button type="submit" value="Submit">Envíar</button>
                    </div>
                    <div className="item6">
                    <input type="checkbox" name="condiciones" id="acepto" required/><label htmlFor="acepto" >He leído y acepto la <a href="/privacy/">política de privacidad</a></label>
                    </div>

                </form>
                </div>
      </div>
        );
    }
}