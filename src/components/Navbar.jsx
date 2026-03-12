import React from "react";
import logo from "../assets/sanskar-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center px-8 py-4 bg-white shadow-sm font-sans sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center mr-10">
        <img
          src={logo}
          alt="Sanskar Realty"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 flex-1">
        <li className="cursor-pointer hover:text-black transition-colors">
          Home
        </li>
        <li className="cursor-pointer hover:text-black transition-colors">
          About Us
        </li>
        <li className="cursor-pointer hover:text-black transition-colors">
          Projects
        </li>
        <li className="cursor-pointer hover:text-black transition-colors">
          Blog
        </li>
        <li className="cursor-pointer hover:text-black transition-colors">
          Media
        </li>
        <li className="cursor-pointer hover:text-black transition-colors">
          Locations
        </li>
      </ul>

      {/* Right Action Buttons */}
      <div className="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-wide ml-auto">
        <button className="text-gray-600 hover:text-black uppercase">
          Update
        </button>
        <button className="text-gray-600 hover:text-black uppercase">
          NRI Corner
        </button>
        <button className="btn-premium bg-black text-white px-6 py-2 rounded-sm hover:bg-gray-800 transition-colors uppercase">
          Enquire Now
        </button>
      </div>

      {/* Mobile Menu Button (Placeholder) */}
      <div className="md:hidden">
        <button className="text-black focus:outline-none">
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
