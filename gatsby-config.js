const tailwindConfig = require("./tailwind.config.js");

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Christoforos - Software Engineer & Web Developer`,
    description: `Welcome to the personal website of Christoforos Varakliotis, a software engineer specializing in web development, projects, and insights`,
    author: `Christoforos Varakliotis`,
    siteUrl: `https://christoforos.me`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christoforos-varakliotis-software-engineer`,
        short_name: `christoforos`,
        start_url: `/`,
        background_color: tailwindConfig.theme.colors.purple,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: tailwindConfig.theme.colors.purple,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
