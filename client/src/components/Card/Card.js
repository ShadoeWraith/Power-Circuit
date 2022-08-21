import graphicsCardImg from "../../assets/graphics-card.jpg";

import "./Card.css";

export default function Card() {
  return (
    <div className="card-container">
      <a href="/">
        <div className="card">
          <img
            className="card-image"
            src={graphicsCardImg}
            alt="graphics card"
          />
          <div className="card-text">
            <h3 className="card-title">Graphics Cards</h3>
          </div>
        </div>
      </a>
      <a href="/">
        <div className="card">
          <img
            className="card-image"
            src={graphicsCardImg}
            alt="graphics card"
          />
          <div className="card-text">
            <h3 className="card-title">Graphics Cards</h3>
          </div>
        </div>
      </a>
      <a href="/">
        <div className="card">
          <img
            className="card-image"
            src={graphicsCardImg}
            alt="graphics card"
          />
          <div className="card-text">
            <h3 className="card-title">Graphics Cards</h3>
          </div>
        </div>
      </a>
      <a href="/">
        <div className="card">
          <img
            className="card-image"
            src={graphicsCardImg}
            alt="graphics card"
          />
          <div className="card-text">
            <h3 className="card-title">Graphics Cards</h3>
          </div>
        </div>
      </a>
    </div>
  );
}
