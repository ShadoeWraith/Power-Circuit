import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    name
    parent
    category
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query Checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCTS = gql`
query Products {
  products {
    name
    description
    image
    quantity
    price
    category
  }
}
`;
