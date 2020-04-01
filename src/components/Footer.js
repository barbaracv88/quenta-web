import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames, htmlToReact} from '../utils';

import { allLangs } from "../components/Language/Langs/langs";


export default class Footer extends React.Component {
    render() {
        const { language } = this.props;


        let item_list = _.get(this.props, 'pageContext.menus.footer');
        // let item_len = _.size(item_list);
        return (

            <footer id="footer">
                <div className="content" >
                    <p className="copyright">
    


                    {/* {allLangs[language.name].textFooter}
                   <a href="/privacy/"> {allLangs[language.name].link1} </a>  | 
                    <a href="/aviso-legal/" > {allLangs[language.name].link2} </a>  | 
                    <a href="/seguridad-informacion/" > {allLangs[language.name].link3} </a>  | 
                    <a href="/cookies/" > {allLangs[language.name].link4} </a>  | 
                    <a href="/politica-calidad/" > {allLangs[language.name].link5} </a> */}
                </p>
                </div>
                
            </footer>

        );
    }
}
