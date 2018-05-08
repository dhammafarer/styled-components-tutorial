module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-csv',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
  ]
};
