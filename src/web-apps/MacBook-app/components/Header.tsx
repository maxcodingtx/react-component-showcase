import type { JSX } from "react";
import AppleLogo from "../images/apple-logo.png";

const Logo = (): JSX.Element => {
  return (
    <div className="">
      <img className="w-10" src={AppleLogo} alt="Apple Logo" />
    </div>
  );
};

const NavLinks = (): JSX.Element => {
  return (
    <div className="flex">
      <a className="mr-5 text-lg font-semibold" href="#">
        Overview
      </a>
      <a className="mr-5 text-lg font-semibold" href="#">
        Pricing
      </a>
      <a className="text-lg font-semibold" href="#">
        Features
      </a>
    </div>
  );
};

export const NavBar = (): JSX.Element => {
  return (
    <nav className="my-3 flex items-center justify-between">
      <Logo />

      <NavLinks />
    </nav>
  );
};
