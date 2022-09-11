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

import DarkMode from "./DarkMode";
import "./Navbar.css";
import searchIcon from "../../assets/search.svg";
import { urlFormat } from "../../utils/helpers";

export default function Navbar() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (str1, str2 = "") => {
    console.log(str1, str2);
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: str1,
      currentSubCategory: str2,
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
          {categories.map((category, index) => (
            <div className="nav-category">
              <Link
                key={index}
                to={urlFormat(category.name)}
                onClick={() => {
                  handleClick(category.name);
                }}
              >
                {category.name}
              </Link>
              <div className="dropdown-menu">
                {category.subcategories.map((sub, idx) => (
                  <Link
                    to={`${urlFormat(category.name)}${urlFormat(sub)}`}
                    key={index + "" + idx}
                    onClick={() => {
                      handleClick(category.name, sub);
                    }}
                  >
                    {sub}
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
