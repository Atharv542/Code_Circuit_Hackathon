import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 md:px-24 py-4 flex items-center shadow-md">
      {/* Logo / Brand Name */}
      <h1 className="text-2xl md:text-4xl font-bold text-pink-500">
        Lingo<span className="text-pink-400">Trip</span>
      </h1>

      {/* Navigation Links */}
      <nav className="ml-auto flex gap-4 md:gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-semibold text-lg md:text-2xl px-2 md:px-4 py-1 md:py-2 rounded-full transition-all ${
              isActive ? "  text-pink-600" : "text-white hover:text-pink-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/options"
          className={({ isActive }) =>
            `font-semibold text-lg md:text-2xl px-2 md:px-4 py-1 md:py-2 rounded-full transition-all ${
              isActive ? "  text-pink-600" : "text-white hover:text-pink-500"
            }`
          }
        >
          CreateSheets
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;


