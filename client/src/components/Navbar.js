import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DarkMode from "./DarkMode";

import searchIcon from "../assets/search.svg";

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav>
      <div className="nav-top">
        <a href="/">
          <h1 className="nav-title">Krafty</h1>
        </a>
        <div className="search-bar">
          <label>
            <input
              type="text"
              placeholder="Search for anything"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            ></input>
            <button type="submit" className="search-icon">
              <img src={searchIcon} alt="search"></img>
            </button>
          </label>
        </div>
        <div className="nav-buttons">
          <button type="button">Sign In</button>
          <button className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-number">5</span>
          </button>
          <DarkMode />
        </div>
      </div>
      <ul className="nav-dropdown">
        <li>
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
        <li>
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  );
}
