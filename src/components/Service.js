import React from 'react';

export default class Service extends React.Component {
    render() {
        return (
            <div className="service">
                <img className="img_service" src = {this.props.img}/>
                <div className="service_description">
                    <p className="breadcrumb"> {this.props.breadcrumb}</p>
                    <p className="title_service"> {this.props.title}</p>
                    <p className="description"> {this.props.description}</p>
                    <button className="button" label={this.props.buttonLabel}></button>
                </div>
            </div>
                );
            }
}