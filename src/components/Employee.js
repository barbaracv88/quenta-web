import React from 'react';

export default class Employee extends React.Component {
    render() {
        return (
              
                    <div className="employee">
                        
                        <img className="rrss linkedin" src = {this.props.rrss_1}/>
                        <img className="rrss mail" src = {this.props.rrss_2}/>
                       
                        <img className="img_employee" src = {this.props.image}/>
                        <p className="name"> {this.props.name}</p>
                        <p className="position"> {this.props.position}</p>
                    </div>
              
            );
        
        }

}