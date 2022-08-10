import graphicsCardImg from "../assets/graphics-card.jpg";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-image" src={graphicsCardImg} alt="graphics card" />
        <div className="card-text">
          <h3 className="card-title">Graphics Cards</h3>
        </div>
      </div>
    </div>
  );
}
