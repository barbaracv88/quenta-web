import React from 'react';

export default class Service extends React.Component {
    render() {
        return (
            <div className="service">
                 
                {/* <img className="img_service" src = {this.props.img}/> */}
         
                <div className="service_description">
                    <p className="breadcrumb"> {this.props.breadcrumb}</p>
                    <h3 className="title_service"> {this.props.title}</h3>
                    <p className="description"> {this.props.description}</p>
                    <div className="icons">
                        <div className="icon">
                            <img className="img_icon" src = {this.props.img_icon1}></img>
                            <p className="description_icon">{this.props.description_icon1}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon" src = {this.props.img_icon2}></img>
                            <p className="description_icon">{this.props.description_icon2}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon" src = {this.props.img_icon3}></img>
                            <p className="description_icon">{this.props.description_icon3}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon  icon4" src = {this.props.img_icon4}></img>
                            <p className="description_icon">{this.props.description_icon4}</p>
                        </div>

                    </div>
                    <a href = {this.props.link}>  <button> MÁS INFORMACIÓN</button></a>
                </div>
            </div>
                );
            }
}