import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
            <button
              type="submit"
              className={`search-icon ${
                isFocused ? "isVisible" : "notVisible"
              }`}
            >
              <img src={searchIcon} alt="search"></img>
            </button>
          </label>
        </div>
        <div className="nav-buttons">
          <button type="button">Sign In</button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
      <ul className="nav-categories">
        <li>Home Favorites</li>
        <li>Jewlery &amp; Accessories</li>
        <li>Clothing &amp; Shoes</li>
        <li>Home &amp; Living</li>
        <li>Wedding &amp; Party</li>
        <li>Toys &amp; Entertainment</li>
        <li>Art &amp; Collectibles</li>
        <li>Craft Supplies</li>
        <li>Gifts &amp; Gift Cards</li>
      </ul>
    </nav>
  );
}
