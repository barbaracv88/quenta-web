import React from 'react';
import TitleSection from '../components/TitleSection';




export default class Contacto extends React.Component {
    render() {
        return (
            
            <div className="contact" id="contacto">
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
                            <p>Paseo de la Castellanaa, 141</p>
                        </div>
                        <div className="fact">
                            {/* <img src="images/telefono.png"></img> */}
                            <p>91-7498013</p>
                        </div>

                    </div>
                    <div className="facts">
                    <div className="fact">
                            {/* <img src="images/direccion.png"></img> */}
                            <p>C/ Cidro nº 3, 3º 2</p>
                        </div>
                        <div className="fact">
                            {/* <img src="images/telefono.png"></img> */}
                            <p>91-6565656</p>
                        </div>

                    </div>
                    
                    </div>
                    <div className="fact_email">
                            {/* <img src="images/email.png"></img> */}
                            <p>quenta@quenta.es</p>
                        </div>
                </div>
  
            <form method="POST" className="form" name="contact" data-netlify="true" action="thank-you">

                    <div className="item1">
                        <input type="text" id="name" name="name" placeholder="Nombre (requerido)" required/>
                    </div>
                    {/* <div className="item2">
                        <input type="email" id="mail" name="email" placeholder="Email (requerido)" required />
                    </div>
                    
                    <div className="item3">
                        <input type="text" id="tlf" name="telephone" placeholder="Teléfono" />
                    </div>
                    <div className="form_2 item4">
                        <textarea id="msg" name="message" placeholder="Mensaje"></textarea>
                    </div> */}

                    <div className="button item5">
                    <button type="submit" value="Submit">Envíar</button>
                    </div>

                </form>
                </div>
      </div>
        );
    }
}