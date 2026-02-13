import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ currentPage, setCurrentPage, menuFilter, setMenuFilter, cartCount = 0, hasOrder = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainPages = ["home", "about", "menu", "orderhistory"];
  const utilityPages = ["cart", ...(hasOrder ? ["ordertrack"] : [])];

  const pageLabel = (page) => {
    if (page === "ordertrack") return "Track Order";
    if (page === "cart") return "Cart";
    if (page === "orderhistory") return "Order History";
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-stone-200/80 sticky top-0 z-50 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src={logo}
                alt="Pizza RK"
                className="h-10 w-10 object-cover rounded-full ring-2 ring-stone-200 hover:ring-red-800/30 transition-all duration-200"
              />
              <span className="text-lg font-bold text-stone-800 hidden sm:block">
                Pizza RK
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {mainPages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`font-medium transition-all duration-200 text-sm px-4 py-2.5 rounded-full ${
                    currentPage === page
                      ? "text-white bg-red-800 shadow-md"
                      : "text-stone-600 hover:text-red-800 hover:bg-red-50"
                  }`}
                >
                  {pageLabel(page)}
                </button>
              </li>
            ))}
            {utilityPages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`font-medium transition-all duration-200 text-sm px-4 py-2.5 rounded-full flex items-center gap-1.5 ${
                    currentPage === page
                      ? "text-white bg-red-800 shadow-md"
                      : "text-stone-600 hover:text-red-800 hover:bg-red-50"
                  }`}
                >
                  {page === "cart" && (
                    <span className="relative inline-flex">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full px-1">
                          {cartCount > 99 ? "99+" : cartCount}
                        </span>
                      )}
                    </span>
                  )}
                  {pageLabel(page)}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-red-800 text-white px-5 py-2.5 rounded-full hover:bg-red-900 transition-all duration-200 text-sm font-bold shadow-md ml-1"
              >
                Contact Us
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
          <div className="md:hidden py-4 border-t border-stone-200">
            <ul className="space-y-1">
              {["home", "about", "menu", "orderhistory"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left font-medium transition-all duration-200 text-sm px-4 py-3 rounded-lg ${
                      currentPage === page
                        ? "text-red-800 bg-red-50"
                        : "text-stone-700 hover:text-red-800 hover:bg-stone-50"
                    }`}
                  >
                    {pageLabel(page)}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setCurrentPage("cart");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left font-medium transition-all duration-200 text-sm px-4 py-3 rounded-lg flex items-center justify-between ${
                    currentPage === "cart"
                      ? "text-red-800 bg-red-50"
                      : "text-stone-700 hover:text-red-800 hover:bg-stone-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    Cart
                    {cartCount > 0 && (
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                        {cartCount}
                      </span>
                    )}
                  </span>
                </button>
              </li>
              {hasOrder && (
                <li>
                  <button
                    onClick={() => {
                      setCurrentPage("ordertrack");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left font-medium transition-all duration-200 text-sm px-4 py-3 rounded-lg ${
                      currentPage === "ordertrack"
                        ? "text-red-800 bg-red-50"
                        : "text-stone-700 hover:text-red-800 hover:bg-stone-50"
                    }`}
                  >
                    Track Order
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => {
                    setCurrentPage("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left font-medium transition-all duration-200 text-sm px-4 py-3 rounded-lg ${
                    currentPage === "contact"
                      ? "text-red-800 bg-red-50"
                      : "text-stone-700 hover:text-red-800 hover:bg-stone-50"
                  }`}
                >
                  Contact Us
                </button>
              </li>

              {/* Mobile Menu Filter Buttons */}
              {currentPage === "menu" && (
                <li className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 px-4 mb-2 font-semibold">
                    FILTER BY:
                  </p>
                  <div className="flex gap-2 px-4">
                    <button
                      onClick={() => {
                        setMenuFilter("all");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 font-semibold transition-all duration-200 text-xs px-4 py-2 rounded-lg ${
                        menuFilter === "all"
                          ? "text-white bg-gradient-to-r from-blue-500 to-blue-600"
                          : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setMenuFilter("hot");
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 font-semibold transition-all duration-200 text-xs px-4 py-2 rounded-lg ${
                        menuFilter === "hot"
                          ? "text-white bg-gradient-to-r from-red-500 to-orange-600"
                          : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      Hot
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
