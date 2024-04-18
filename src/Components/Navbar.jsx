import React, { useState } from "react";
import { Link } from "react-router-dom";
import gifLogo from "./robotgif/aa_f.gif";
import staticLogo from "./robotgif/aa.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Apps", "About Us"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // State for tracking if the logo is hovered
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // Event handlers for logo hover
  const handleLogoHoverEnter = () => setIsLogoHovered(true);
  const handleLogoHoverLeave = () => setIsLogoHovered(false);

  return (
    <nav className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 flex justify-between items-center">
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={handleLogoHoverEnter}
        onMouseLeave={handleLogoHoverLeave}
      >
        <img
          src={isLogoHovered ? gifLogo : staticLogo} // Use gifLogo if hovered, otherwise use staticLogo
          alt="Logo"
          className="w-14 h-14" // Set standard logo dimensions
        />
        <span className="text-xl ml-2">Activator</span>
      </div>

      {/* Navbar Links */}
      <ul className="hidden md:flex md:items-center md:space-x-4 md:flex-grow md:justify-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.replace(/[\s-]+/g, "")}`}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white p-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
           <Link
           key={index}
           to={`/${link.replace(/[\s-]+/g, '').toLowerCase()}`}
           className="hover:text-gray-300"
         >
           {link}
         </Link>
         
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
