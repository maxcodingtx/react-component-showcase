import React from "react";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Information from "./components/Information";
import "../index.css";
const Index: React.FC = () => {
  return (
    <>
      <Hero></Hero>
      <Sponsors></Sponsors>
      <Information></Information>
    </>
  );
};

export default Index;
