import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-around px-3 py-9">
      <h1 className="w-2/5 text-center text-2xl font-bold text-white">
        Tech-World <br /> 2025
      </h1>

      <nav className="w-2/5 text-left">
        <ul className="*:**:text-gray-600 *:**:hover:text-gray-300">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
