import React from "react";
import {
  Hero,
  Sponsors,
  Information,
  Speakers,
  Footer,
} from "./components/barrel";
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
