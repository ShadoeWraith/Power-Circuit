import graphicsCard from "../../assets/graphics-card.jpg";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div>
      <div className="product-list-container">
        <div className="product">
          <img className="product-image" src={graphicsCard} alt="product" />
          <div className="product-info">
            <h3 className="product-name">RTX 3090 Ti</h3>
            <p className="product-desc">
              The EVGA NVIDIA GeForce RTX 3090 Ti is colossally powerful in
              every way imaginable, giving you a whole new tier of performance
              at 8K resolution. It's powered by the NVIDIA Ampere architecture,
              which doubles down on ray tracing and AI performance with enhanced
              RT Cores, Tensor Cores, and new streaming multiprocessors.
              Combined with the next generation of design, cooling, and
              overclocking with EVGA Precision X1, the EVGA NVIDIA GeForce RTX
              3090 Ti Series redefines the definition of ultimate performance.
            </p>
          </div>
          <div className="pricing">
            <span className="product-price">$500</span>
            <button className="add-to-cart" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      {/* </div>
      <div className="product-list-container">
        <div className="product">
          <img className="product-image" src={graphicsCard} alt="product" />
          <div className="product-info">
            <h3 className="product-name">RTX 3090 Ti</h3>
            <p className="product-desc">
              The EVGA NVIDIA GeForce RTX 3090 Ti is colossally powerful in
              every way imaginable, giving you a whole new tier of performance
              at 8K resolution. It's powered by the NVIDIA Ampere architecture,
              which doubles down on ray tracing and AI performance with enhanced
              RT Cores, Tensor Cores, and new streaming multiprocessors.
              Combined with the next generation of design, cooling, and
              overclocking with EVGA Precision X1, the EVGA NVIDIA GeForce RTX
              3090 Ti Series redefines the definition of ultimate performance.
            </p>
          </div>
          <div className="pricing">
            <span className="product-price">$500</span>
            <button className="add-to-cart" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-list-container">
        <div className="product">
          <img className="product-image" src={graphicsCard} alt="product" />
          <div className="product-info">
            <h3 className="product-name">RTX 3090 Ti</h3>
            <p className="product-desc">
              The EVGA NVIDIA GeForce RTX 3090 Ti is colossally powerful in
              every way imaginable, giving you a whole new tier of performance
              at 8K resolution. It's powered by the NVIDIA Ampere architecture,
              which doubles down on ray tracing and AI performance with enhanced
              RT Cores, Tensor Cores, and new streaming multiprocessors.
              Combined with the next generation of design, cooling, and
              overclocking with EVGA Precision X1, the EVGA NVIDIA GeForce RTX
              3090 Ti Series redefines the definition of ultimate performance.
            </p>
          </div>
          <div className="pricing">
            <span className="product-price">$500</span>
            <button className="add-to-cart" type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-list-container">
        <div className="product">
          <img className="product-image" src={graphicsCard} alt="product" />
          <div className="product-info">
            <h3 className="product-name">RTX 3090 Ti</h3>
            <p className="product-desc">
              The EVGA NVIDIA GeForce RTX 3090 Ti is colossally powerful in
              every way imaginable, giving you a whole new tier of performance
              at 8K resolution. It's powered by the NVIDIA Ampere architecture,
              which doubles down on ray tracing and AI performance with enhanced
              RT Cores, Tensor Cores, and new streaming multiprocessors.
              Combined with the next generation of design, cooling, and
              overclocking with EVGA Precision X1, the EVGA NVIDIA GeForce RTX
              3090 Ti Series redefines the definition of ultimate performance.
            </p>
          </div>
          <div className="pricing">
            <span className="product-price">$500</span>
            <button className="add-to-cart" type="submit">
              Add to cart
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
