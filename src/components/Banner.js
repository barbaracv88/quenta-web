import React from 'react';
import _ from 'lodash';

// import {markdownify, Link, safePrefix, classNames} from '../utils';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Plx from 'react-plx';

const parallaxData = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 0,
          endValue: 150,
          property: 'translateY',
        },
      ],
    },
  ];
  const parallaxDataText = [
    {
      start: 10,
      end: 300,
      properties: [
        {
          startValue: 0,
          endValue: 90,
          property: 'translateY',
        },
      ],
    },
  ];

export default class Banner extends React.Component {
    render() {
        return (
                
            <section id="banner">
              
                <div className="content">
                    <div className="inner">
                        <header>
                        <Plx
                        className='ParallaxHeader'
                        parallaxData={ parallaxDataText }
                        >
                            <h2>{_.get(this.props, 'pageContext.frontmatter.banner.title')}</h2>
                            {/* {markdownify(_.get(this.props, 'pageContext.frontmatter.banner.subtitle'))} */}
                        </Plx> 
                        </header>
                        

                        <Plx
                        className='ParallaxHeaderImg'
                        parallaxData={ parallaxData }
                        >
                        <div className="image-header">
                            </div>
                            </Plx>
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
         
        );
        
    }
}
