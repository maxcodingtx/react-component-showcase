import React from "react";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Information from "./components/Information";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import genericBackground from "./images/generic-bg.png";
import "../index.css";
const Index: React.FC = () => {
  return (
    <>
      <Hero></Hero>
      <Sponsors></Sponsors>
      <Information></Information>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${genericBackground})` }}
      >
        <Speakers></Speakers>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Index;
