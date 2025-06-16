import { Link } from "react-router-dom";

interface NavigationBarProps {
  WebsiteName: string;
}

function NavigationBar({ WebsiteName }: NavigationBarProps) {
  return (
    <div className="flex justify-between bg-[#222222] px-8 py-5 text-2xl text-white">
      <h1 className="font-extrabold">{WebsiteName}</h1>
      <nav>
        <ul className="flex *:mx-2 *:font-semibold">
          <li>
            <Link to="/pages/home">Home</Link>
          </li>
          <li>
            <Link to="/pages/about">About</Link>
          </li>
          <li>
            <Link to="/pages/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
