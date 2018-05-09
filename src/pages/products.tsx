import * as React from 'react';

interface Props {
  data: {
    allProductsCsv: {
      edges: Node[]
    }
  }
}

interface Node {
  node: {
    name: string
    price: string
  }
}

const ProductsPage: React.SFC<Props> = ({ data }) => {
  const products = data.allProductsCsv.edges;
  return (
    <div>
      {products.map(({ node }, i) => <p key={i}>{node.name}, {node.price}</p>)}
    </div>
  );
}

export default ProductsPage;


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
