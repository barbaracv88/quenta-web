import React from 'react';
import _ from 'lodash';
import ServiceTemplate from './../components/ServicesTemplate';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

export default class Cybersecurity extends React.Component {
    render() {
        return (
            <div className="cybersecurity-template">
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
                titletemplate1="IT Security Solutions & Cybersecurity"
                subtitle="Garantice la seguridad de sus sistemas a través de nuestras soluciones o servicios en ciberseguridad.                "
                // img="images/img-apm.jpg"
                textintroduction="Quenta Solutions proporciona servicios especializados en el ámbito de la ciberseguridad basados en auditorías técnicas, pentesting, auditorías de código y gestión de las vulnerabilidades."
            

                // img2="images/introduction2.jpg"
                titletemplate3="Auditorías técnicas"
                subtitle3="El grupo de expertos en seguridad de Quenta Solutions examina las redes internas, WiFi, sistemas y aplicaciones (web y móviles) con el objetivo de identificar posibles vulnerabilidades de seguridad susceptibles de recibir ataques de origen hostil.
                Como resultado de este análisis, se proporcionan informes técnicos y ejecutivos de resultados, incluyendo el estado de seguridad de los objetivos evaluados, para prevenir y mitigar los peligrosos ciberataques, identificando las distintas posibilidades para mejorar la seguridad."

                // img3="images/introduction3.jpg"
                titletemplate4="Test de ntrusión o pentesting"
                subtitle4="El objetivo de Quenta Solutions es demostrar cómo un atacante real sería capaz de comprometer su objetivo (aplicación, sistema, red, infraestructura...) tomando el control del mismo, comprometiendo su disponibilidad y la información que contiene.

                En un test de intrusión se identifican las principales técnicas empleadas por los atacantes para borrar cualquier rastro del ataque y obtener datos adicionales con los que perpetrar ataques en sistemas adyacentes."

               
           


                titletemplate2="Auditorías de código"
                subtitle2=" Quenta Solutions proporciona servicios de auditoría de código automática, manual, en ejecución y estático, encontrando defectos críticos y debilidades de seguridad en el código antes de que se conviertan en vulnerabilidades."
                li1="Estadísticas de cambios respecto al código auditado."
                li2="Capacidad de auditar código no compilable."
                li3="Código auditado en tiempo de ejecución."
                li4="Instalación en servidor de Quenta Solutions o del cliente."
                li5="Máximo número de lenguajes soportados."


                titletemplate5="Gestión de vilnerabilidades"
                subtitle5="Quenta Solutions proporciona servicios de monitorización continua de vulnerabilidades tales como escaneos de vulnerabilidades de redes, sistemas y aplicaciones, eliminación de falsos positivos, descubrimiento de activos, cuadros de mando de riesgos tecnológicos, información técnica y ejecutiva, integración con la gestión del ciclo de vida IT, integración con aplicaciones de ticketing, parches, informes detallados para la remediación, gestión IT a través de interfaces abiertos.

                Integrado con el resto de servicios de Quenta Solutions de auditorías técnicas, mitigamos las vulnerabilidades en un breve espacio de tiempo, reduciendo el riesgo técnico asociado."
                />
            </Layout>
            </div>
        );
    }
}
