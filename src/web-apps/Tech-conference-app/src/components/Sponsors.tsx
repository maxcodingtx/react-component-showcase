import React from "react";
import genericBackground from "../images/generic-bg.png";

const logos = Object.values(
  import.meta.glob("../images/logo-sponsors/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

export const Sponsors: React.FC = () => {
  return (
    <section
      className="bg-indigo-950 px-3 py-9 *:mx-auto *:max-w-[720px]"
      style={{ backgroundImage: `url(${genericBackground})` }}
    >
      <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
        Our Sponsors
      </h1>
      <div className="mt-12 grid grid-cols-2 gap-8 px-3 md:h-[calc(100%-4rem)]">
        {logos.map((logo, index) => (
          <img
            key={index + 1}
            src={logo}
            alt={`Sponsor Logo ${index + 1}`}
            className="mx-auto my-auto w-[160px]"
          />
        ))}
      </div>
    </section>
  );
};
