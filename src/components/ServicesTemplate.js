import React, { Component } from "react";

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
        <div className="services-template list1">
          <h3>{this.props.titletemplate2}</h3>
          <div className="line"></div>
          <p className="subtitle">{this.props.subtitle2}</p>
          <ul>
            <li key={this.props.li1}>{this.props.li1}</li>
            <li key={this.props.li2}>{this.props.li2}</li>
            <li key={this.props.li3}>{this.props.li3}</li>
            <li key={this.props.li4}>{this.props.li4}</li>
            <li key={this.props.li5}>{this.props.li5}</li>
            <li key={this.props.li6} className="li6-optional">
              {this.props.li6}
            </li>
            <li key={this.props.li7} className="li7-optional">
              {this.props.li7}
            </li>
            <li key={this.props.li8} className="li8-optional">
              {this.props.li8}
            </li>
          </ul>
        </div>

        <div className="section-icons">
          <div className="icon">
            <img className="img_icon" src={this.props.img_icon1} alt=""></img>
            <p className="description_icon">{this.props.description_icon1}</p>
          </div>
          <div className="icon">
            <img className="img_icon" src={this.props.img_icon2} alt=""></img>
            <p className="description_icon">{this.props.description_icon2}</p>
          </div>
          <div className="icon">
            <img className="img_icon" src={this.props.img_icon3} alt=""></img>
            <p className="description_icon">{this.props.description_icon3}</p>
          </div>
          <div className="icon">
            <img className="img_icon" src={this.props.img_icon4} alt=""></img>
            <p className="description_icon">{this.props.description_icon4}</p>
          </div>
          <div className="icon">
            <img className="img_icon" src={this.props.img_icon5} alt=""></img>
            <p className="description_icon">{this.props.description_icon5}</p>
          </div>
        </div>
        <div className="background-color">
          <div className="introduction2">
            <div className="img-introduction2"></div>
            <div>
              <h3>{this.props.titletemplate3}</h3>
              <span className="line"></span>
              <p className="subtitle">{this.props.subtitle3}</p>
            </div>
          </div>
          <div className="introduction3">
            <div className="img-introduction3"></div>
            <div>
              <h3>{this.props.titletemplate4}</h3>
              <span className="line"></span>
              <p className="subtitle">{this.props.subtitle4}</p>
            </div>
          </div>
          <div className="services-template list2">
            <ul>
              <li key={this.props.li11}>{this.props.li11}</li>
              <li key={this.props.li21}>{this.props.li21}</li>
              <li key={this.props.li31}>{this.props.li31}</li>
              <li key={this.props.li41}>{this.props.li41}</li>
              <li key={this.props.li51}>{this.props.li51}</li>
              <li key={this.props.li61}>{this.props.li61}</li>
              <li key={this.props.li71}>{this.props.li71}</li>
              <li key={this.props.li81} className="li8-optional">
                {this.props.li81}
              </li>
            </ul>
          </div>
        </div>

        <div className="introduction4">
          <div className="img-introduction4"></div>
          <div>
            <h3>{this.props.titletemplate5}</h3>
            <span className="line"></span>
            <p className="subtitle">{this.props.subtitle5}</p>
          </div>
        </div>
      </div>
    );
  }
}
