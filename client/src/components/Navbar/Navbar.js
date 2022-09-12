import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";

import DarkMode from "./DarkMode";
import "./Navbar.css";
import searchIcon from "../../assets/search.svg";
import { urlFormat } from "../../utils/helpers";

export default function Navbar() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const mainCategories = categories.filter((c) => {
    return c.parent === "/";
  });
  
  const navCategories = mainCategories.map((m) => {
    const sub = categories.filter((c) => {
      return c.parent.includes(m.name)});
    const pair = {subCategory: sub};
    m = {...m, ...pair};
    return m;
  });
  useEffect(() => {
    if (!state.currentCategory) {
      dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: window.location.pathname,
      });
    }
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (str) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: str,
    });
  };

  return (
    <nav>
      <div className="nav-top">
        <div className="search-bar">
          <Link to="/">
            <h1 className="nav-title">Power⚡Circuit</h1>
          </Link>
          {/* <label>
            <input type="text" placeholder="Search"></input>
            <button type="submit" className="search-icon">
              <img src={searchIcon} alt="search"></img>
            </button>
          </label> */}
        </div>
        <div className="nav-buttons">
          <button className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-number">99</span>
            <span>Cart</span>
          </button>
          {/* <DarkMode /> */}
        </div>
      </div>
      <div className="nav-bottom">
        <ul className="nav-dropdown">
          {navCategories.map((category, index) => (
            <div className="nav-category" key={index}>
              
              <Link
                to={category.category}
                onClick={() => {
                  handleClick(category.category);
                }}
              >
                {category.name}
              </Link>
              <div className="dropdown-menu">
                {category.subCategory.map((element, i) => (
                  <Link
                    to={element.category}                    
                    key={index + "" + i}
                    onClick={() => {
                      handleClick(element.category);
                    }}
                  >
                    {element.name}
                  </Link>
                  ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
}
