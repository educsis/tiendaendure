module.exports = {
  siteMetadata: {
    title: `Mi tienda`,
    description: `Una tienda online construida con Gatsby`,
    author: `@tiendaendure`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`, // carpeta con tus productos.json
      },
    },
    `gatsby-transformer-json`, // para leer JSON
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
