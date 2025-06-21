import { type JSX } from "react";
import MacBookImage from "../images/MacBook.jpg";
import Button from "./common/Button";

const HeroSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-between px-8 py-3">
      <div className="w-[35%]">
        <p className="mb-2 text-5xl font-bold">The new MacBook</p>
        <p className="text-xl">Powerful performance in a sleek, thin design.</p>
        <Button
          onClick={(e) => {
            console.log(e.currentTarget);
          }}
        >
          Start Now
        </Button>
      </div>
      <div className="w-[60%]">
        <img src={MacBookImage} alt="MacBook Image" />
      </div>
    </section>
  );
};

export default HeroSection;
