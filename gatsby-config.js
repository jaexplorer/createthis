module.exports = {
  siteMetadata: {
    title: `createThis`,
    description: `createThis Website`,
    author: `Andrew Sabato`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CreateThis`,
        short_name: `CreateThis`,
        start_url: `/`,
        lang: `en`,
        description: `Website for createThis`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        orientation: `portrait`,
        // icon: `src/assets/images/fav.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
