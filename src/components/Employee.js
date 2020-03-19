import React from 'react';

export default class Employee extends React.Component {
    render() {
        return (
              
                    <div className="employee">
                        
                        <a href={this.props.href1}>
                            <img className="rrss linkedin" src = {this.props.rrss_1} alt=""/>
                            </a>
                        <a href={this.props.href2}>
                            <img className="rrss mail" src = {this.props.rrss_2} alt=""/>
                            </a>
                       
                        <img className="img_employee" src = {this.props.image} alt=""/>
                        <p className="name"> {this.props.name}</p>
                        <p className="position"> {this.props.position}</p>
                    </div>
              
            );
        
        }

}