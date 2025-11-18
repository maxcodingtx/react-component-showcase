import { NavLink } from "react-router";

type navBarProps = {
  favoritesCount?: number;
};

export const NavBar = ({ favoritesCount }: navBarProps) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <NavLink to="/" className="text-xl font-bold">
        Recipe Vault
      </NavLink>
      <div>
        <NavLink to="/" className="mr-4">
          Home
        </NavLink>
        <NavLink to="/favorites" className="mr-4">
          Favorites : {favoritesCount}
        </NavLink>
        <NavLink to="/add-recipe" className="mr-4">
          Add Recipe
        </NavLink>
      </div>
    </nav>
  );
};
