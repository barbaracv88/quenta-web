import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';

class apm extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <section id="main" className="wrapper">
                    <div className="inner">
                        <header className="major">
                            <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                            {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                        </header>
     
             
                       
                     
                    
    
                    </div>
                </section>
            </Layout>
        );
    }
}

export default apm;