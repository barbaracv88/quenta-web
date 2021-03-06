module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        // `gatsby-plugin-favicon`
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
        // {
        //     resolve: `gatsby-plugin-favicon`,
        //     options: {
        //       logo: "./src/static/images/favicon_quenta.png",
        
        //       // WebApp Manifest Configuration
        //       appName: null, // Inferred with your package.json
        //       appDescription: null,
        //       developerName: null,
        //       developerURL: null,
        //       dir: 'auto',
        //       lang: 'en-US',
        //       background: '#fff',
        //       theme_color: '#fff',
        //       display: 'standalone',
        //       orientation: 'any',
        //       start_url: '/?homescreen=1',
        //       version: '1.0',
        
        //       icons: {
        //         android: true,
        //         appleIcon: true,
        //         appleStartup: true,
        //         coast: false,
        //         favicons: true,
        //         firefox: true,
        //         yandex: false,
        //         windows: false
        //       }
        //     }
        //   }
    ]
};
