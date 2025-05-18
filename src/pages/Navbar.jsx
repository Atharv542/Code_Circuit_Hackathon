import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-24 py-5 flex gap-x-96  items-center shadow-md">
      {/* Logo / Brand Name */}
      <h1 className="text-4xl font-bold text-pink-500">
        Lingo<span className="text-pink-400">Trip</span>
      </h1>

      {/* Navigation Links */}
      <nav className="space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-semibold text-2xl px-4 py-2 rounded-full transition-all ${
              isActive ? "underline underline-offset-5 text-pink-600" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/options"
          className={({ isActive }) =>
            `font-semibold text-2xl px-4 py-2 rounded-full transition-all ${
              isActive ? "underline underline-offset-5 text-pink-600" : "text-white"
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

