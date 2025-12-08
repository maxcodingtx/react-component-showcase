import { NavLink } from "react-router";

interface NavbarProps {
  favoritesCount?: number;
}

export const Navbar = ({ favoritesCount = 0 }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <NavLink to="/" className="text-xl font-bold">
        Movie Explorer
      </NavLink>
      <div>
        <NavLink to="/" className="mr-4">
          Home
        </NavLink>
        <NavLink to="/favorites" className="mr-4">
          Favorites : {favoritesCount}
        </NavLink>
      </div>
    </nav>
  );
};
