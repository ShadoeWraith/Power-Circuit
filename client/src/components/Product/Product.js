import graphicsCardImg from "../../assets/graphics-card.jpg";
import "./Product.css";

export default function Product() {
  return (
    <section className="product-section">
      <div className="featured-products">
        <h2>Our featured offers</h2>
      </div>
      <div className="product-container">
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
        <div className="product-item">
          <img
            className="product-image"
            src={graphicsCardImg}
            alt="thing"
          ></img>
          <h3 className="product-name">EVGA GeForce RTX 3090 Ti</h3>
          <span className="product-price">$500.00</span>
        </div>
      </div>
    </section>
  );
}
