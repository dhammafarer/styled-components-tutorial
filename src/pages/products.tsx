import React from 'react';

export default ({ data }) => {
  const products = data.allProductsCsv.edges;
  return (
    <div>
      {products.map(({ node }, i) => <p key={i}>{node.name}, {node.price}</p>)}
    </div>
  );
};

export const query = graphql`
  query ProductsQuery {
    allProductsCsv {
      edges {
        node {
          name
          price
        }
      }
    }
  }
`;
