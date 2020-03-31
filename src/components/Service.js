import React from 'react';

import { allLangs } from "../components/Language/Langs/langs";


export default class Service extends React.Component {
    render() {

        const { language } = this.props;

        return (
            <div className="service">
                 
                {/* <img className="img_service" src = {this.props.img}/> */}
         
                <div className="service_description">
                    <p className="breadcrumb"> {this.props.breadcrumb}</p>
                    <h3 className="title_service"> {this.props.title}</h3>
                    <p className="description"> {this.props.description}</p>
                    <div className="icons">
                        <div className="icon">
                            <img className="img_icon" src = {this.props.img_icon1} alt=""></img>
                            <p className="description_icon">{this.props.description_icon1}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon" src = {this.props.img_icon2} alt=""></img>
                            <p className="description_icon">{this.props.description_icon2}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon" src = {this.props.img_icon3} alt=""></img>
                            <p className="description_icon">{this.props.description_icon3}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon  icon4" src = {this.props.img_icon4} alt=""></img>
                            <p className="description_icon">{this.props.description_icon4}</p>
                        </div>

                    </div>
                    <a href = {this.props.link}>  <button> {allLangs[language.name].buttonServices}</button></a>
                </div>
            </div>
                );
            }
}