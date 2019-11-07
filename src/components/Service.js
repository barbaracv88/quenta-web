import React from 'react';

export default class Service extends React.Component {
    render() {
        return (
            <div className="service">
                <img className="img_service" src = {this.props.img}/>
                <div className="service_description">
                    <p className="breadcrumb"> {this.props.breadcrumb}</p>
                    <h3 className="title_service"> {this.props.title}</h3>
                    <p className="description"> {this.props.description}</p>
                    <a> <button> MÁS INFORMACIÓN</button></a>
                </div>
            </div>
                );
            }
}