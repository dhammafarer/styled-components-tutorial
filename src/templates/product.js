import React from 'react';

export default ({ data }) => (
  <p>{data.productsCsv.name}</p>
);

export const query = graphql`
  query ProductCsv($slug: String!) {
    productsCsv(fields: { slug: {eq: $slug} }) {
      name
      price
    }
  }
`;
