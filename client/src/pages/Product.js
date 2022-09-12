import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { UPDATE_PRODUCTS, UPDATE_CATEGORIES } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import Item from "../components/Item";
import ProductList from "../components/ProductList/ProductList";
import Filter from "../components/Filter/Filter";

export default function Category() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: window.location.pathname,
      });
    }
    console.log(state.categories)
    return state.products.filter(
      (product) => product.category.includes(currentCategory)
    );
  }
  //
  return (
    <>
      {state.products.length ? (
        <>
          {filterProducts().map((product) => (
            // <ProductList

            // />
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
