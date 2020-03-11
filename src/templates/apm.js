import React from 'react';
import _ from 'lodash';
import ServiceTemplate from './../components/ServicesTemplate';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

export default class Apm extends React.Component {
    render() {
        return (
            <div className="apm-template">
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
                titletemplate1="Application Performance Management"
                subtitle="Identificamos los problemas de Rendimiento de las Aplicaciones de forma rápida y automatizada."
                // img="images/img-apm.jpg"
                textintroduction="Quenta Solutions proporciona servicios 
                de valor añadido basados en soluciones 
                de Monitorización de Aplicaciones."
                subtext="Realizamos un seguimiento, en tiempo real, de todas las transacciones 
                de negocio en función de la experiencia del usuario (real o sintético), independientemente de la tecnología e infraestructura utilizada."
                titletemplate2="Monitorización"
                subtitle2={["Las soluciones de APM de Quenta Solutions ofrecen una monitorización unificada", <strong> para todo el entorno Full Stack:</strong>]}
                li1={["Monitorización de infraestructura,", <strong> logs y métricas de red.</strong>]}
                li2="Análisis de experiencia digital de usuario en tiempo real."
                li3="Monitorización de Microservicios y contenedores."
                li4="Detección automática de problemas con Root Cause Analysis basado en IA."
                li5={["Monitorización de", <strong>aplicaciones basadas en servicios: Salesforce, Office 365, MS Dynamics, etc</strong>]}
                li6="Conocer el tiempo de respuesta del 100% de las transacciones de negocio."
                li7="Trazabilidad End-to-End, de usuarios-transacciones-infraestructura a través de todas las capas y tecnologías."

                img_icon1="images/one.svg"
                description_icon1="Aplicaciones basadas en las arquitecturas y frameworks más utilizados."
                img_icon2="images/two.svg"
                description_icon2="Aplicaciones para 
                plataformas móviles 
                basadas en iOS y Android."
                img_icon3="images/three.svg"
                description_icon3="Aplicaciones virtualizadas basadas en Citrix."
                img_icon4="images/four.svg"
                description_icon4="Visibilidad detallada 
                del lado del back-end."
                img_icon5="images/five.svg"
                description_icon5="Experiencia de usuario 
                que permite identificar 
                su interacción 
                con las aplicaciones."

                // img2="images/introduction2.jpg"
                titletemplate3="Automatización"
                subtitle2="Resolvemos los problemas de rendimiento de forma rápida y automatizada antes que ocasionen un grave impacto en el negocio, a través de establecimiento de alertas basadas en anomalías del rendimiento, integración con entornos basados en Cloud, automatización de tareas manuales y repetitivas, etc."

                // img3="images/introduction3.jpg"
                titletemplate4="Análisis"
                subtitle3="Cubrimos tanto el Análisis Operacional, pudiendo comparar
                el impacto de los cambios de versión en el tiempo o analizando 
                la escalabilidad de la infraestructura y el consumo de recursos, como el Análisis de Aplicaciones correlando métricas de aplicación con el negocio, detectando tendencias y patrones en la ejecución de los servicios para poder tomar decisiones en base 
                a la información obtenida.."
                />
            </Layout>
            </div>
        );
    }
}
