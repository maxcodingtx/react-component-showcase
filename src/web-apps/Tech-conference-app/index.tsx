import {
  Hero,
  Sponsors,
  Information,
  Speakers,
  Footer,
} from "./src/components/barrel";
import mainBackground from "./src/images/main-bg.png";
import "./index.css";

export default function TechConferenceApp() {
  return (
    <main
      className="bg-[url('./images/main-bg.png')] bg-cover bg-center bg-no-repeat font-[roboto]"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <Hero></Hero>
      <section className="md:grid md:grid-cols-2">
        <Sponsors></Sponsors>
        <Information></Information>
      </section>
      <section>
        <Speakers></Speakers>
        <Footer></Footer>
      </section>
    </main>
  );
}
