import React from 'react';
import Img from 'gatsby-image';

export default ({ data }) => (
  <div>
    <p>{data.productsCsv.name}</p>
    <Img sizes={data.productsCsv.img.childImageSharp.sizes}/>
  </div>
);

export const query = graphql`
  query ProductCsv($slug: String!) {
    productsCsv(fields: { slug: {eq: $slug} }) {
      name
      price
      img {
        childImageSharp {
          sizes(maxWidth: 900) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;
