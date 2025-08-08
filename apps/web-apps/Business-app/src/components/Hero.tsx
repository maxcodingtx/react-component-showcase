import React from "react";
import heroImage from "../images/hero-image.png"; // Adjust the path as necessary

// Serves as hero section
const Welcome: React.FC = () => {
  return (
    <section className="">
      <div className="border-b border-b-black px-5 py-10">
        <h1 className="mb-4 text-center font-[Avenir] text-5xl font-bold text-[#053052]">
          Discover Our Offers
        </h1>
        <p className="mb-4 max-w-xl text-center font-[Quicksand] font-light md:mx-auto md:block">
          We offer top-quality services tailored to your business needs. Join us
          and start your journey towards success.
        </p>
        <button className="mx-auto block rounded-3xl border border-black bg-[#ece4a9] px-6 py-2 font-[Quicksand]">
          Get Started
        </button>
      </div>

      {/* scrolling horizontal text "contact us" */}
      <div className="box-border block w-full overflow-hidden py-3 whitespace-nowrap">
        <span className="mx-2 inline-block animate-[scroll_5s_linear_infinite] pl-[100%] font-[Quicksand] text-lg font-light text-black">
          Contact Us Now • Contact Us Now • Contact Us Now
        </span>
        <span className="mx-2 inline-block animate-[scroll_5s_linear_infinite] pl-[100%] font-[Quicksand] text-lg font-light text-black">
          Contact Us Now • Contact Us Now • Contact Us Now
        </span>
        <span className="mx-2 inline-block animate-[scroll_5s_linear_infinite] pl-[100%] font-[Quicksand] text-lg font-light text-black">
          Contact Us Now • Contact Us Now • Contact Us Now
        </span>
        <span className="mx-2 inline-block animate-[scroll_5s_linear_infinite] pl-[100%] font-[Quicksand] text-lg font-light text-black">
          Contact Us Now • Contact Us Now • Contact Us Now
        </span>
      </div>
      <div
        className="h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </section>
  );
};

export default Welcome;
