/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Timo Turkki',
    description: 'Timo Turkki - Personal website',
    blogs: [
      {
        title: 'Blog title 1',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque doloribus omnis modi. Minus id non fuga voluptates, ducimus blanditiis cupiditate repellat voluptatum quas libero explicabo dolores iusto, deleniti odit?',
      },
      {
        title: 'Blog title 2',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloremque doloribus omnis modi. Minus id non fuga voluptates.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xtz6obvie6u7`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
