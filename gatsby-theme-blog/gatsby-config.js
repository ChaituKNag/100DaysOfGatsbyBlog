const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: "100 days of Gatsby - Naga Blog",
    description: "A starter blog site using gatsby themes and gatsby mdx",
    author: "Naga Konada"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js")
        }
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Open Sans", "Oswald"]
        }
      }
    }
  ]
};
