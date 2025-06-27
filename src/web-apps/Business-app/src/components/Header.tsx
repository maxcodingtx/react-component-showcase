// header jsx element

import React from "react";
import BurgerIcon from "../images/burger-icon.png";
import Logo from "../images/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b-1 border-b-black bg-white px-5 py-7 text-white">
      <div className="flex items-center">
        <img
          className="mr-3 size-10 rounded-full border-1 border-black p-1"
          src={Logo}
          alt="Website Logo"
        />
        <p className="font-[Avenir] text-black">Foo, Our Website</p>
      </div>

      <img className="size-5" src={BurgerIcon} alt="Burger Icon" />
    </header>
  );
};

export default Header;
