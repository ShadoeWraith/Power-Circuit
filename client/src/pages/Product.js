import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { UPDATE_PRODUCTS } from "../utils/actions";

import Item from "../components/Item";
import ProductList from "../components/ProductList/ProductList";
import Filter from "../components/Filter/Filter";

export default function Category() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory, currentSubCategory } = state;
  const { loading, data: productData } = useQuery(QUERY_PRODUCTS);
  console.log(state);
  //query is being weird have to fix in ../utils/queries.js

  useEffect(() => {
    if (productData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: productData.categoryProducts,
      });
    }
  }, [productData, loading, dispatch]);
  //
  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category === currentCategory
    );
  }
  //
  return (
    <>
      {state.products.length ? (
        <>
          {filterProducts().map((product) => (
            <Item
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </>
      ) : (
        <>error: no products!</>
      )}
      {loading ? <>loading</> : null}
      <ProductList />
      {/* <Filter /> */}
    </>
  );
}
