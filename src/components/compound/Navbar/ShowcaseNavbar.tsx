// this version of the app is for showcasing the Navbar component with routing
import { NavLink, Outlet } from "react-router-dom";

interface NavigationBarProps {
  WebsiteName: string;
}

export default function ShowcaseNavBar({ WebsiteName }: NavigationBarProps) {
  return (
    <div>
      <div className="flex justify-between bg-[#222222] px-8 py-5 text-2xl text-white">
        <h1 className="font-extrabold">{WebsiteName}</h1>
        <nav>
          <ul className="flex *:mx-2 *:font-semibold">
            <li>
              <NavLink
                to="/navbar-app/pages/home"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "pb-1 hover:border-b-2 hover:border-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/navbar-app/pages/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "pb-1 hover:border-b-2 hover:border-gray-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/navbar-app/pages/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white pb-1"
                    : "pb-1 hover:border-b-2 hover:border-gray-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
