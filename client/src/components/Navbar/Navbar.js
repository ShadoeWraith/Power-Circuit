import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, Link } from "react";

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import DarkMode from "./DarkMode";
import "./Navbar.css";
import searchIcon from "../../assets/search.svg";

export default function Navbar() {
  // const [state, dispatch] = useStoreContext();
  // const {categories} = state;
  const {loading, data: categoryData} = useQuery(QUERY_CATEGORIES);
  // useEffect(() => {
  //   if (categoryData) {
  //     dispatch({
  //       type: UPDATE_CATEGORIES,
  //       categories: categoryData.categories,
  //     });
  //   }
  // }, [categoryData, loading, dispatch]);

  // const handleClick = (id) => {
  //   dispatch({
  //     type: UPDATE_CURRENT_CATEGORY,
  //     currentCategory: id,
  //   });
  // };

  return (
    <nav>
      <div className="nav-top">
        <div className="search-bar">
          <a href="/">
            <h1 className="nav-title">Power⚡Circuit</h1>
          </a>
          <label>
            <input type="text" placeholder="Search for anything"></input>
            <button type="submit" className="search-icon">
              <img src={searchIcon} alt="search"></img>
            </button>
          </label>
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
          {categoryData.categories.map((category) => (
            <li> {category.name}
              <div className="dropdown-menu">
                {category.subcategories.map((sub) => (
                  <a>{sub}</a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
