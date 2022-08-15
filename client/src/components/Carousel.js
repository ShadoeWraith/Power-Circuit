import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import graphicsCard from "../assets/graphics-card.jpg";

export default function image() {
  return (
    <Carousel>
      <div>
        <img src={graphicsCard} />
      </div>
      <div>
        <img src={graphicsCard} />
      </div>
      <div>
        <img src={graphicsCard} />
      </div>
      <div>
        <img src={graphicsCard} />
      </div>
      <div>
        <img src={graphicsCard} />
      </div>
      <div>
        <img src={graphicsCard} />
      </div>
    </Carousel>
  );
}
