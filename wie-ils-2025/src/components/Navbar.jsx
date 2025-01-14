import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#4e2659] shadow-md  mt-6 ml-6 mr-6 mb-6 rounded-3xl">
        <div className="container flex items-center py-4 ">
          <nav className="flex space-x-6 justify-around items-center ml-72 mr-0 px-auto w-full text-2xl"> {/* Adjusted to justify-around for even spacing */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Programs
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Speakers
            </NavLink>
            <NavLink
              to="/sponsors"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Sponsors
            </NavLink>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Registration
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Team
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold border-b-2 border-[#FFBA00]"
                  : "text-white hover:text-gray-500"
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;