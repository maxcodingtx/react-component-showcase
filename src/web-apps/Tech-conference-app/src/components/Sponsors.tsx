import React from "react";

import amazonLogo from "../images/logo-sponsors/logo-amazon.png";
import googleLogo from "../images/logo-sponsors/logo-google.png";
import intelLogo from "../images/logo-sponsors/logo-intel.png";
import metaLogo from "../images/logo-sponsors/logo-meta.png";
import microsoftLogo from "../images/logo-sponsors/logo-microsoft.png";
import oracleLogo from "../images/logo-sponsors/logo-oracle.png";
import genericBackground from "../images/generic-bg.png";

const sponsorLogoURLs = [
  amazonLogo,
  googleLogo,
  intelLogo,
  metaLogo,
  microsoftLogo,
  oracleLogo,
];

export const Sponsors: React.FC = () => {
  return (
    <section
      className="bg-indigo-950 px-3 py-8 *:mx-auto *:max-w-[720px]"
      style={{ backgroundImage: `url(${genericBackground})` }}
    >
      <h1 className="text-center text-2xl font-bold text-white">
        Our Sponsors
      </h1>
      <div className="mt-12 grid grid-cols-2 gap-8 px-3">
        {sponsorLogoURLs.map((logo, index) => (
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
