import {
  AboutUs,
  Footer,
  Gallery,
  Header,
  Hero,
} from "./src/components/barrel";
import "./index.css";
export default function BusinessApp() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
}
