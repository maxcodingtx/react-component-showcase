import "./index.css";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import AboutUs from "./src/components/AboutUs";
import Gallery from "./src/components/Gallery";
import Footer from "./src/components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <Footer />
      </main>
    </>
  );
};

export default App;
