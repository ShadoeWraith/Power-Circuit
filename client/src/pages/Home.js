import Image from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  return (
    <section>
      <Image />
      <h1 className="page-header"> Popular products </h1>
      <Card />
    </section>
  );
}
