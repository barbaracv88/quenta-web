import React from 'react';
import _ from 'lodash';
import ServiceTemplate from './../components/ServicesTemplate';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

export default class sam extends React.Component {
    render() {
        return (
            <div className="sam-template">
<Layout {...this.props}>
            {/* <section id="main" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>

                    </div>
                </section> */}
                <ServiceTemplate
                titletemplate1="Software Asset Management"
                subtitle="Conozca en detalle el número de licencias adquiridas e instaladas,
                así como el uso real que se está haciendo de ellas."
                // img="images/img-apm.jpg"
                textintroduction="Quenta Solutions proporciona servicios de Gestión de Activos Software capaces de realizar una efectiva gestión y optimización de los activos software de una compañía."
                subtext="De manera activa y continuada en el tiempo, proporcionamos un reporting dinámico, permitiendo así reducir los costes y las inversiones en licencias software, garantizando el cumplimiento de uso."
                titletemplate2="¿Con que podemos ayudarte?"
                li1="El Cumplimiento del Uso de todas las Licencias Software de manera continuada."
                li2="Disminuir el riesgo de auditorías de todos los fabricantes software."
                li3="Reducir el gasto y optimizar los costes en Licencias Software."
                li4="Optimizar los Modos de Licenciamiento de cada fabricante software."
                li5="Aumentar la eficiencia del negocio."
                li6="Asegurar las políticas de seguridad."
                li7="Gestionar el Ciclo de Vida."
                li8="Disponer de Servicios Legales y Jurídicos TIC."



                // img2="images/introduction2.jpg"
                titletemplate3="Servicios de asesoría legal y jurídica TIC"
                subtitle2="Quenta Solutions proporciona servicios de asesoría Legal y Jurídica como apoyo a las compañías ante las auditorías de los fabricantes software, desde la notificación de incio de la auditoría o en cualquier fase en la que se encuentre. Los servicios de asesoría legal y jurídica TIC de Quenta Solutions incluyen:"

                li11="Conocimiento exhaustivo de las condiciones de licenciamiento de cada fabricante."
                li61="Confrontación del régimen de derechos y obligaciones con las pretensiones de los fabricantes."
                li21="Asegurar el posicionamiento jurídico-técnico de las compañías."
                li81="Elaboración de las comunicaciones dirigidas al fabricante software auditor."
                li31="Activación de los mecanismos técnicos y legales."
                li51="Comprobación del cumplimiento por parte del fabricante o auditor de todas sus obligaciones y condiciones de la auditoría."
                li41="Coordinación con los equipos jurídicos y técnicos de las compañías."
                li71="Asesoramiento en la negociación comercial."
                />
            </Layout>
            </div>
        );
    }
}

