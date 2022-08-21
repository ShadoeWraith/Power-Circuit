import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

// import { useStoreContext } from "../utils/GlobalState";
// import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
// import { QUERY_CATEGORIES } from "../utils/queries";
// import { useQuery } from "@apollo/client";

import DarkMode from "./DarkMode";
import "./Navbar.css";
import searchIcon from "../../assets/search.svg";

export default function Navbar() {
  // const [isFocused, setIsFocused] = useState(false);
  // // const [state, dispatch] = useStoreContext();
  // const {categories} = state;
  // const {loading, data: categoryData} = useQuery(QUERY_CATEGORIES);

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
          <DarkMode />
        </div>
      </div>
      <div className="nav-bottom">
        <ul className="nav-dropdown">
          <li className="pc-parts">
            <a href="/">PC Parts</a>
            <div className="dropdown-menu">
              <a href="/">Processors/CPUs</a>
              <a href="/">Grahpics Cards</a>
              <a href="/">Motherboards</a>
              <a href="/">Drives &amp; Storage</a>
              <a href="/">Computer Memory</a>
              <a href="/">Desktop Cases</a>
              <a href="/">Power Supplies</a>
              <a href="/">Air &amp; Water Cooling</a>
            </div>
          </li>
          <li>
            <a href="/">Computers</a>
            <div className="dropdown-menu">
              <a href="/">Desktop Computers</a>
              <a href="/">Laptop/Notebooks</a>
            </div>
          </li>
          <li>
            <a href="/">Apple</a>
            <div className="dropdown-menu">
              <a href="/">Macbook</a>
              <a href="/">Mac Desktops</a>
              <a href="/">iPad</a>
              <a href="/">Apple Watch</a>
              <a href="/">AirPods</a>
              <a href="/">Beats</a>
              <a href="/">Accessories</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
