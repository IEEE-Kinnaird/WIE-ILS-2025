
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
      {/* Top bar with logo and menu toggle */}
      <div className="flex justify-between items-center bg-[#fefefA] border-[#4e2659] p-4">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="flex items-center ml-4">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <img
            src={wie}
            alt="WIE Logo"
            className="h-16 w-32 sm:h-20 sm:w-48 ml-2 sm:ml-10"
          />
        </div>
      </div>

      {/* Navigation menu */}
      <header className="bg-[#28112E] shadow-md mt-6 mx-6 rounded-3xl">
        <div className={`container py-4 ${isMenuOpen ? "block" : "hidden md:block"} md:flex md:justify-center`}>
          <nav className="flex flex-col md:flex-row md:space-x-6 justify-around items-center w-full text-lg md:text-xl text-center">
            {[
              { to: "/", label: "Home" },
              { to: "/comingsoon", label: "Programs" },
              { to: "/comingsoon", label: "Speakers" },
              { to: "/comingsoon", label: "Sponsors" },
              { to: "/comingsoon", label: "Registration" },
              { to: "/comingsoon", label: "Team" },
              { to: "/comingsoon", label: "Contact Us" },
            ].map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
               className="text-white font-semibold pb-1"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Backdrop for menu */}
      {isMenuOpen && (
        <div
          className="inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
