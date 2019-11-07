import React from 'react';
import Service from './Service';

export default class Sassetm extends React.Component {
    render() {
        return (
        <div className="sam">
            
            <Service
            img="images/sam.png"
            breadcrumb="SERVICIOS  >  SAM"
            title = 'Software Asset Management'
            description="Proporcionamos servicios de Gestión de Activos Software (SAM) basados
            en un conjunto de procesos de negocio y procedimientos capaces
            de realizar una efectiva gestión y optimización de los activos software
            de una compañía, a través de todas las fases de gestión de su ciclo de vida."
            
            />
        </div>
      
        )
    }
}