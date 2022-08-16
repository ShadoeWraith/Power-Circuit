import "./Footer.css";

import github from "../../assets/github.jpg";
import deploy from "../../assets/deploy.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/ShadoeWraith/Krafty">
          <img src={github} alt="github" />
        </a>
        <a href="/">
          <img src={deploy} alt="linkedin" />
        </a>
        <h3>Made by two dudes &amp; Kyle</h3>
      </div>
    </footer>
  );
}
