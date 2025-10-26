import React from "react";
import {
  Hero,
  Sponsors,
  Information,
  Speakers,
  Footer,
} from "./components/barrel";
import mainBackground from "./images/main-bg.png";
import "../index.css";

const TechConferenceApp: React.FC = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat font-[roboto]"
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
};

export default TechConferenceApp;
