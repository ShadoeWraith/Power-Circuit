import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-top">
        <a href="/">
          <h1 className="nav-title">Krafty</h1>
        </a>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything"></input>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
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
