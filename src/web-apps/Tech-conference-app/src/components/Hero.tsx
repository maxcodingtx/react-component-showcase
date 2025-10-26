import React from "react";

const registerUser = () => {
  alert("Successfully registered for the conference!");
};

export const Hero: React.FC = () => {
  return (
    <section className="px-3 py-20 *:text-center *:text-white">
      <h1 className="text-center text-2xl font-semibold md:text-4xl">
        TECH-WORLD 2025
      </h1>
      <p className="my-3 text-xs md:text-lg">
        March 7-9, 2025 - San Francisco, CA
      </p>
      <button
        type="button"
        className="mx-auto block cursor-pointer rounded-xl bg-radial from-blue-500 to-indigo-800 px-4 py-1.5 text-xs font-semibold active:translate-y-0.5 md:px-8 md:py-2 md:text-lg"
        onClick={registerUser}
      >
        Register Now
      </button>
    </section>
  );
};

// export Hero;
