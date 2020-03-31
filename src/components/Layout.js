import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from "react-cookie-consent";

import { allLangs } from "../components/Language/Langs/langs";


export default class Body extends React.Component {
    render() {
        const { language } = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
                    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/>
                    <body className={((_.get(this.props, 'pageContext.frontmatter.template') === _.get(this.props, 'pageContext.site.siteMetadata.landing_template')) ? 'landing ' : '')} />
                </Helmet>
                    <Header {...this.props} />
                    {this.props.children}
       
                    <CookieConsent
                        location="bottom"
                        buttonText="Acepto el uso de cookies"
                        cookieName="Cookies"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#23B683" }}
                        expires={150}
                    >
                        Necesitamos usar cookies para que funcione todo, si permanece aquí acepta su uso, más información en <a href="/aviso-legal/">Aviso Legal</a> , <a href="/privacy/">Política de Privacidad</a> y la <a href="/cookies/">Política de Cookies</a>. {" "}
                        <span style={{ fontSize: "10px" }}>
                        
                        </span>
                    </CookieConsent>
            </React.Fragment>
        );
    }
}
