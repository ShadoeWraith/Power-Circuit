import "./Footer.css";

import github from "../../assets/github.jpg";
import deploy from "../../assets/deploy.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <a href="https://github.com/ShadoeWraith/Krafty">
            <img src={github} alt="github" />
          </a>
          <h3>&copy; Made by two dudes &amp; Kyle&trade;</h3>
        </div>
        <div className="footer-credit">
          <h2>Credits:</h2>
          <h3 className="credit-names">
            <a href="https://github.com/ShadoeWraith">Shaun</a>
            <a href="https://github.com/Hectcast508">Hector</a>
            <a href="https://github.com/uhMammoth">Kyle&trade;</a>
          </h3>
        </div>
      </div>
    </footer>
  );
}
