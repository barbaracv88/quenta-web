import React from 'react';
import _ from 'lodash';
import Alliances from '../components/Alliances';
import Carrousel from '../components/Carrousel';
import Services from '../components/Services';
import components, {Layout} from '../components/index';
import Banner from '../components/Banner';
import Contacto from '../components/Contact';
import CookieConsent from "react-cookie-consent";


export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                    <Banner {...this.props} />
                    {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                        let GetSectionComponent = components[_.get(section, 'component')];
                        return (
                            <GetSectionComponent key={section_idx} {...this.props} section={section} page={this.props.pageContext} site={this.props.pageContext.site} />
                        )
                    })}
                     <Services/>
                     <Alliances/>
                     <Carrousel/>
                     <Contacto/>
                     <CookieConsent
                        location="bottom"
                        buttonText="Acepto el uso de cookies"
                        cookieName="Cookies"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#23B683" }}
                        expires={150}
                    >
                        Necesitamos usar cookies para que funcione todo, si permanece aquí acepta su uso, más información en <a href="/privacy/">Aviso Legal</a> y la <a href="/privacy/">Política de Privacidad</a>. {" "}
                        <span style={{ fontSize: "10px" }}>
                        
                        </span>
                    </CookieConsent>
            </Layout>
        );
    }
}
