import React from 'react';
import TitleSection from '../components/TitleSection';




export default class Contacto extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="information">
                <div className="map"></div>
                    <div className="facts">
                        <div className="fact">
                            <img src="images/telefono.png"></img>
                            <p>91-6565656</p>
                        </div>
                        <div className="fact">
                            <img src="images/email.png"></img>
                            <p>quenta@quenta.es</p>
                        </div>
                        <div className="fact">
                            <img src="images/direccion.png"></img>
                            <p>C/ Cidro nº 3, 3º 2</p>
                        </div>
                    </div>
                </div>
                <div className="title_contact">
                <TitleSection
                category="Podemos ayudarte"
            />
            </div>
            <form action="" method="post" className="form">
                <div className="form_1">
                    <div>
                        <label for="name">Nombre</label>
                        <input type="text" id="name" placeholder="Nombre (requerido)" />
                    </div>
                    <div>
                        <label for="mail">E-mail</label>
                        <input type="email" id="mail" placeholder="Email (requerido)" />
                    </div>
                    
                    <div>
                        <label for="name">Teléfono</label>
                        <input type="text" id="name" />
                    </div>
                    </div>
                    <div className="form_2">
                        <label for="msg">Mensaje</label>
                        <textarea id="msg"></textarea>
                    </div>
                </form>
                <form>
                
                <div class="button">
                    <button type="submit">Envíar</button>
                </div>
                </form>
            
      </div>
        );
    }
}