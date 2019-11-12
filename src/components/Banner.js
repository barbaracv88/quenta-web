import React from 'react';
import _ from 'lodash';

// import {markdownify, Link, safePrefix, classNames} from '../utils';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default class Banner extends React.Component {
    render() {
        return (
            // <ParallaxProvider>
                
            <section id="banner">
              
                <div className="content">
                    <div className="inner">
                        <header>
                        {/* <Parallax y={[103, -40]}  > */}
                            <h2>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>
                            {/* {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))} */}
                            {/* </Parallax> */}
                        </header>
                        {/* <Parallax y={[90, -100]}> */}
                        <div className="image-header">
                            </div>
                            {/* </Parallax> */}
                        {/* {_.get(this.props, 'pageContext.frontmatter.banner.actions') && 
                            <ul className="actions">
                                {_.map(_.get(this.props, 'pageContext.frontmatter.banner.actions'), (action, action_idx) => (
                                    <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={classNames('button', {'primary': _.get(action, 'is_primary')}, {'scrolly': _.get(action, 'is_scrolly')}, {'huge': _.get(action, 'is_huge')})}>{_.get(action, 'label')}</Link></li>
                                ))}
                            </ul>
                        } */}
                    </div>
                </div>
               

   
            </section>
            // </ParallaxProvider>
         
        );
        
    }
}
