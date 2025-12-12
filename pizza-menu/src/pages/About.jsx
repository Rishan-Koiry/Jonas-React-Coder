import React from "react";
import Footer from "./Footer";

const About = ({ setCurrentPage }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
              About Pizza RK
            </h1>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Pizza RK, where tradition meets taste! Since our
                establishment, we've been serving the finest pizzas made with
                authentic Italian recipes and the freshest local ingredients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our master chefs have perfected the art of pizza making,
                ensuring every bite is a delightful experience. From classic
                Margherita to innovative specialty pizzas, we have something for
                everyone.
              </p>
              <div className="bg-orange-50 p-8 rounded-2xl mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 text-xl">✓</span>
                    <span className="text-gray-700">
                      Quality ingredients sourced locally
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 text-xl">✓</span>
                    <span className="text-gray-700">
                      Traditional cooking methods
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 text-xl">✓</span>
                    <span className="text-gray-700">
                      Exceptional customer service
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-600 text-xl">✓</span>
                    <span className="text-gray-700">
                      Family-friendly atmosphere
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default About;
