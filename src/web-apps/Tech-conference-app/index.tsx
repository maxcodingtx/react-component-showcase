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
      className="font-roboto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <Hero />
      <Sponsors />
      <Information />
      <Speakers />
      <Footer />
    </main>
  );
}
