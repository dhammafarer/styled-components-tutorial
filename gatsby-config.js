module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    'gatsby-transformer-csv'
  ]
};
