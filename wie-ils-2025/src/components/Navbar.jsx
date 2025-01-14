import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoo.png";
import wie from "../assets/wier.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='flex justify-between items-center bg-[#fefefA] border-[#4e2659] p-4'>
        <button
          className="p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <img src={wie} alt="WIE Logo" className="h-20 w-48 ml-10" />
        </div>
      </div>

      <header className="bg-[#4e2659] shadow-md mt-6 ml-6 mr-6 mb-6  rounded-3xl">
        <div className={`container py-4 ${isMenuOpen ? 'pb-4' : 'pb-0'}`}>
          <nav className={`flex-col md:flex md:flex-row md:space-x-6 justify-around items-center w-full lg:ml-36 lg:h-12 lg:pb-4 text-2xl ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
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
              to="/team"
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

      {/* Optional: Add a backdrop when the menu is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default Navbar;