import React, { Component } from 'react';

export default class ServicesTemplate extends Component {
    render() {
        return (
            <div className="template">
                <div className="header-template">
                    <h2 className="title-template">{this.props.titletemplate1}</h2>
                    <p className="subtitle">{this.props.subtitle}</p>
                </div>
                <div className="introduction">
                    <div className="img-introduction"></div>
                    <div>
                    <p className="text-introduction">{this.props.textintroduction}</p>
                    <p className="subtext">{this.props.subtext}</p>
                    </div>

                </div>
                <div className="services-template grey1">
                    <h3>{this.props.titletemplate2}</h3>
                    <div className="line"></div>
                    <p className="subtitle">{this.props.subtitle2}</p>
                    <ul>
                        <li>{this.props.li1}</li>
                        <li>{this.props.li2}</li>
                        <li>{this.props.li3}</li>
                        <li>{this.props.li4}</li>
                        <li>{this.props.li5}</li>
                        <li>{this.props.li6}</li>
                        <li>{this.props.li7}</li>
                        <li className="li8-optional">{this.props.li8}</li>
                    </ul>
                </div>

                <div className="section-icons">
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
                        <img className="img_icon" src = {this.props.img_icon4}></img>
                            <p className="description_icon">{this.props.description_icon4}</p>
                        </div>
                        <div className="icon">
                        <img className="img_icon" src = {this.props.img_icon5}></img>
                            <p className="description_icon">{this.props.description_icon5}</p>
                        </div>
                    </div>
                    <div className="background-color">
                    <div className="introduction2">
                    <div className="img-introduction2"></div>
                        <div>
                            <h3>{this.props.titletemplate3}</h3>
                            <span className="line"></span>
                            <p className="subtitle">{this.props.subtitle2}</p>
                        </div>
                    </div>
                    <div className="introduction3">
                    <div className="img-introduction3"></div>
                        <div>
                            <h3>{this.props.titletemplate4}</h3>
                            <span className="line"></span>
                            <p className="subtitle">{this.props.subtitle3}</p>
                        </div>
                    </div>
                    <div className="services-template list2">
                    <ul >
                        <li>{this.props.li11}</li>
                        <li>{this.props.li21}</li>
                        <li>{this.props.li31}</li>
                        <li>{this.props.li41}</li>
                        <li>{this.props.li51}</li>
                        <li>{this.props.li61}</li>
                        <li>{this.props.li71}</li>
                        <li className="li8-optional">{this.props.li81}</li>
                    </ul>
                    </div>
                    </div>

            </div>
        );
    }
}

