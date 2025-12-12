import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white via-orange-50 to-white shadow-lg border-b-2 border-orange-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 group"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Pizza RK Logo"
                  className="h-12 w-12 object-cover rounded-full ring-2 ring-orange-400 group-hover:ring-orange-600 transition-all duration-200"
                />
                <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  🍕
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hidden sm:block">
                Pizza RK
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
            {["home", "about", "menu"].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`font-semibold transition-all duration-200 text-sm px-5 py-2.5 rounded-full relative overflow-hidden group ${
                    currentPage === page
                      ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {currentPage === page && (
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 animate-pulse opacity-30"></span>
                  )}
                  <span className="relative">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-200 text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 ml-2"
              >
                📞 Contact Us
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="space-y-2">
              {["home", "about", "menu", "contact"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left font-medium transition-all duration-200 text-sm px-4 py-3 rounded-lg ${
                      currentPage === page
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
