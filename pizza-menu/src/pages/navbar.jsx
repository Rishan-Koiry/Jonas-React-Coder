import React from "react";

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center space-x-2"
            >
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="h-34 w-auto"
              />
            </button>
          </div>
          <ul className="flex items-center space-x-8">
            {["home", "about", "menu"].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`font-medium transition-colors duration-200 text-sm ${
                    currentPage === page
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
