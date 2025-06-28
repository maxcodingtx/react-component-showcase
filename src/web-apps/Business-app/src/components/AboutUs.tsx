import React from "react";
import aboutUsImage from "../images/about-us-image.png"; // Adjust the path as necessary

const AboutUs: React.FC = () => {
  return (
    <section className="">
      <h1 className="mx-5 my-3 mb-4 font-[Avenir] text-2xl font-bold text-[#053052]">
        Our Creative Story Begins
      </h1>
      <img
        className="h-auto w-full border-t border-b-1 border-t-black border-b-black"
        src={aboutUsImage}
        alt=""
      />

      {/* who we are */}
      <div className="mx-5 py-7">
        <h1 className="mb-2 font-[Avenir] text-2xl font-bold text-[#053052]">
          Who We Are
        </h1>
        <p className="font-[Quicksand] font-light">
          We are a team of passionate individuals dedicated to delivering the
          best services to our clients. Our mission is to help businesses grow
          and succeed through innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
