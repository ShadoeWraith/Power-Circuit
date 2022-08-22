import Image from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";
import Product from "../components/Product/Product";

export default function Home() {
  return (
    <section>
      {/* Image = Carousel */}
      {/* <Image /> */}
      <h1 className="page-header"> Popular categories </h1>
      <Card />

      <div className="product-section">
        <Product />
      </div>
    </section>
  );
}
