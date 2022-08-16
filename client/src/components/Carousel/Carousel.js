import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import graphicsCard from "../../assets/graphics-card.jpg";

import "./Carousel.css";

export default function image() {
  return (
    <Carousel>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
      <div>
        <img src={graphicsCard} alt="graphics card" />
      </div>
    </Carousel>
  );
}
