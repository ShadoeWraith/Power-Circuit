import Image from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <section>
      {/* Image = Carousel */}
      <Image />
      <h1 className="page-header"> Popular products </h1>
      <Card />
    </section>
  );
}
