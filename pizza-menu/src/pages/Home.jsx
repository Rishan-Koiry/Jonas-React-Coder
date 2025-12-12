import React from "react";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <img
              src={logo}
              alt="Pizza RK Logo"
              className="h-20 w-20 object-cover rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to Pizza RK
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The best pizza in town! Fresh ingredients, authentic recipes, and a
            passion for perfection.
          </p>
          <button
            onClick={() => setCurrentPage("menu")}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Order Now
          </button>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">🍕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fresh Daily
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Made with the freshest ingredients every day
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wood Fired
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cooked in our traditional wood-fired oven
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Made with Love
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every pizza is crafted with care and passion
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Best pizza I've ever had! The crust was perfect and the
                toppings were fresh and flavorful."
              </p>
              <span className="text-sm font-medium text-gray-900">
                - Sarah L.
              </span>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Amazing atmosphere and even better pizza. Highly recommend the
                BBQ Chicken!"
              </p>
              <span className="text-sm font-medium text-gray-900">
                - Mike D.
              </span>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "A true gem in the city. The Margherita pizza is a must-try!"
              </p>
              <span className="text-sm font-medium text-gray-900">
                - Emily R.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Taste the Best Pizza?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Order now and get 10% off on your first order!
          </p>
          <button
            onClick={() => setCurrentPage("menu")}
            className="px-8 py-3 bg-white text-orange-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Our Menu
          </button>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
