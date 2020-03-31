import React from "react";
import _ from "lodash";
// import Typing from 'react-typing-animation';
import Typical from "react-typical";
import Plx from "react-plx";
import { classNames, Link, safePrefix } from "../utils";

import { allLangs } from "../components/Language/Langs/langs";


const parallaxDataText = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 0,
        endValue: 220,
        property: "translateY"
      }
    ]
  }
];
const parallaxButtons = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: "translateY"
      }
    ]
  }
];

export default class Banner extends React.Component {
  onStartedTyping() {}

  render() {
    const { language } = this.props;
    return (
      <section id="banner">
        <div className="content">
          <div className="inner">
            <header>
              <Plx parallaxData={parallaxDataText}>
                <h2 className="title-header">
                {allLangs[language.name].header}
                </h2>
                {/* <Typing speed={25}>
                            <h2 className="title-header">{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>   
                          
                            <h2 className="title-header">{_.get(this.props, 'pageContext.frontmatter.banner.2title')}</h2>  
                            <Typing.Reset count={1} delay={500}/>            
                            <h2 className="title-header">{_.get(this.props, 'pageContext.frontmatter.banner.3title')}</h2>  
                            <Typing.Reset count={1} delay={500} />            
                            <h2 className="title-header">{_.get(this.props, 'pageContext.frontmatter.banner.4title')}</h2>  
                            </Typing> */}
                <h2 className="title-header">
                  {allLangs[language.name].header1}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      ' ',
                      1000,
                      ' compromiso',
                      1500,
                      ' objetivo',
                      1500,
                      ' valor',
                      1800
                    ]}
                  />
                </h2>

                <h2 className="subtitle-header">
                  {_.get(this.props, "pageContext.frontmatter.banner.subtitle")}
                </h2>
              </Plx>
              <Plx parallaxData={parallaxButtons}>
                <div className="buttons_header">
                  {_.get(
                    this.props,
                    "pageContext.frontmatter.banner.actions"
                  ) && (
                    <ul className="actions">
                      {_.map(
                        _.get(
                          this.props,
                          "pageContext.frontmatter.banner.actions"
                        ),
                        (action, action_idx) => (
                          <li key={action_idx}>
                            <Link
                              to={
                                _.get(action, "url").startsWith("#")
                                  ? _.get(action, "url")
                                  : safePrefix(_.get(action, "url"))
                              }
                              className="button secondary_banner"
                            >
                              {allLangs[language.name].headerButton}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </Plx>
            </header>
          </div>

          <div className="App">
            <header className="App-header"></header>
          </div>
        </div>
      </section>
    );
  }
}
