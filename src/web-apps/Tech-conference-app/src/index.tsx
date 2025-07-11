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
    <main className="font-[roboto]">
      <Hero></Hero>
      <section className="md:grid md:grid-cols-2">
        <Sponsors></Sponsors>
        <Information></Information>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${genericBackground})` }}
      >
        <Speakers></Speakers>
        <Footer></Footer>
      </section>
    </main>
  );
};

export default Index;
