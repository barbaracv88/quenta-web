import React from 'react';
import Logos from './Logos';
import TitleSection from '../components/TitleSection';



export default class Alliances extends React.Component {
    render() {
        return (

          <div className="alliances">
                       <TitleSection
    category="Nuestras alianzas"
/>
<div className="logos_alliances">
    <Logos
    img="images/broadcom.png"    
    />
        <Logos
    img="images/appdynamics.png"    
    />
        <Logos
    img="images/dynatrace.png"    
    />
        <Logos
    img="images/flexera.png"    
    />
            <Logos
    img="images/iplabel.png"    
    />
            <Logos
    img="images/riverbed.png"    
    />
            <Logos
    img="images/newrelic.png"    
    />
            <Logos
    img="images/snow.png"    
    />
</div>
</div>
        );
    }
}