import React from "react";
import aboutUsImage from "../images/about-us-image.png"; // Adjust the path as necessary

const AboutUs: React.FC = () => {
  return (
    <section className="">
      <h1 className="mx-5 my-3 mb-4 font-[Avenir] text-2xl font-bold text-[#053052] md:my-6 md:text-5xl">
        Our Creative Story Begins
      </h1>
      <div className="border-t border-b-1 border-t-black border-b-black md:flex">
        <img className="h-auto w-full md:w-1/2" src={aboutUsImage} alt="" />

        {/* who we are */}
        <div className="px-3 pt-7 md:w-1/2 md:pb-20 md:pl-8">
          <h1 className="mb-2 font-[Avenir] text-2xl font-bold text-[#053052] md:mb-8 md:text-4xl">
            Who We Are
          </h1>
          <p className="font-[Quicksand] font-light md:w-96 md:text-xl">
            We are a team of passionate individuals dedicated to delivering the
            best services to our clients. Our mission is to help businesses grow
            and succeed through innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
