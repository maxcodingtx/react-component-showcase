import React from "react";
import heroBackgroundImage from "../images/hero-bg.png";

const registerUser = () => {
  alert("Successfully registered for the conference!");
};

export const Hero: React.FC = () => {
  return (
    <section
      className="*:font-roboto bg-blue-950 bg-cover bg-center px-3 py-20 *:text-center *:text-white"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <h1 className="text-center text-2xl font-semibold">TECH-WORLD 2025</h1>
      <p className="my-3 text-xs">March 7-9, 2025 - San Francisco, CA</p>
      {/* make it a 'common' component  if used again */}
      <button
        type="button"
        className="mx-auto block cursor-pointer rounded-xl bg-radial from-blue-500 to-indigo-800 px-4 py-1.5 text-xs font-semibold active:translate-y-0.5"
        onClick={registerUser}
      >
        Register Now
      </button>
    </section>
  );
};

// export Hero;
