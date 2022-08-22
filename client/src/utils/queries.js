import {gql} from '@apollo/client';

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    name
    subcategories
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
query Products($category: ID) {
    products(category: $category) {
      _id
      name
      description
      image
      quantity
      price
      category {
        _id
      }
      tags {
        name
      }
    }
  }
`;
