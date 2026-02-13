import React, { useState } from "react";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import "../index.css";

const Home = ({ setCurrentPage }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      title: "Fresh Daily",
      shortDesc:
        "Made with the freshest ingredients sourced daily from local farms",
      fullDesc:
        "We pride ourselves on using only the freshest ingredients, sourced daily from trusted local farms. Our dough is made fresh every morning, and our vegetables are hand-picked for quality. We never compromise on freshness - from our premium mozzarella to our ripe tomatoes, every ingredient is selected with care to ensure the best taste in every bite.",
    },
    {
      title: "Wood Fired",
      shortDesc: "Cooked at 900°F in our traditional Italian wood-fired oven",
      fullDesc:
        "Our authentic Italian wood-fired oven reaches temperatures of 900°F, creating the perfect crispy yet chewy crust that you can only get from traditional cooking methods. The intense heat and wood smoke infuse each pizza with a unique, smoky flavor that's impossible to replicate in conventional ovens. This centuries-old technique ensures your pizza is cooked to perfection in just 90 seconds.",
    },
    {
      title: "Made with Love",
      shortDesc: "Every pizza is handcrafted by our master chefs with care",
      fullDesc:
        "Our team of master pizzaiolos brings decades of experience and genuine passion to every pizza they create. Each pie is hand-tossed and carefully assembled with attention to detail that you can taste. We don't just make pizza - we craft experiences that bring families and friends together. From our kitchen to your table, every pizza is a labor of love.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      role: "Regular Customer",
      rating: 5,
      text: "Best pizza I've ever had! The crust was perfect and the toppings were fresh and flavorful. Can't wait to come back!",
      avatar: "/p1.png",
    },
    {
      name: "Mike D.",
      role: "Food Enthusiast",
      rating: 5,
      text: "Amazing atmosphere and even better pizza. The BBQ Chicken is absolutely incredible. Highly recommend!",
      avatar: "/p2.png",
    },
    {
      name: "Emily R.",
      role: "Pizza Lover",
      rating: 5,
      text: "A true gem in the city! The Margherita pizza is authentic perfection. This place is my go-to spot now.",
      avatar: "/p3.png",
    },
    {
      name: "John K.",
      role: "Family Man",
      rating: 5,
      text: "Perfect spot for family dinners! The kids love the pepperoni and we appreciate the quality ingredients. Five stars!",
      avatar: "/p1.png",
    },
    {
      name: "Lisa M.",
      role: "Foodie",
      rating: 5,
      text: "The wood-fired oven makes all the difference. You can taste the authenticity in every bite. Simply amazing!",
      avatar: "/p2.png",
    },
    {
      name: "David T.",
      role: "Local Resident",
      rating: 5,
      text: "Been coming here for years and it never disappoints. Consistent quality and excellent service every single time!",
      avatar: "/p3.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAgMy4zMTQtMi42ODYgNi02IDZzLTYtMi42ODYtNi02IDIuNjg2LTYgNi02IDYgMi42ODYgNiA2Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-80"></div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={logo}
                alt="Pizza RK Logo"
                className="relative h-36 w-36 object-cover rounded-full shadow-2xl border-4 border-white/80 backdrop-blur transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-sm font-black px-4 py-2 rounded-full shadow-xl animate-bounce">
                {" "}
                {/* Restaurant Status */}{" "}
                {(() => {
                  const now = new Date();
                  const day = now.getDay();
                  const hours = now.getHours();
                  const minutes = now.getMinutes();
                  const currentTime = hours * 60 + minutes;
                  const openingTime = day === 0 ? 12 * 60 : 11 * 60;
                  const closingTime =
                    day === 5 || day === 6 ? 23 * 60 : 22 * 60;
                  const isOpen =
                    (currentTime >= openingTime &&
                      currentTime < closingTime &&
                      day !== 0) ||
                    (day === 0 &&
                      currentTime >= openingTime &&
                      currentTime < closingTime);
                  return (
                    <span className={isOpen ? "text-green-300" : "text-red-300"}>
                      {isOpen ? "Open" : "Closed"}
                    </span>
                  );
                })()}{" "}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-2xl animate-fade-in">
              Pizza RK
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Handcrafted with passion, baked to perfection in our traditional
              wood-fired oven. Experience the authentic taste of Italy.
            </p>
          </div>

          <p className="text-lg text-red-200/90 max-w-xl mx-auto mt-4">
            Real wood-fire. Real taste. Real pizza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => setCurrentPage("menu")}
              className="px-10 py-4 bg-white text-red-800 hover:bg-stone-50 font-bold text-lg rounded-full transition-all duration-200 shadow-lg"
            >
              Order now
            </button>
            <button
              onClick={() => setCurrentPage("menu")}
              className="px-10 py-4 bg-white/10 border border-white/40 text-white hover:bg-white/20 font-bold text-lg rounded-full transition-all duration-200"
            >
              View menu
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-white/80 text-sm">
            <span className="font-medium">4.9/5 rating</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="font-medium">10K+ customers</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjNmNGY2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              The Pizza RK Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just make pizza. We craft experiences that bring people
              together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className="group relative bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1 border border-stone-200 hover:border-red-200 overflow-hidden cursor-pointer"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.shortDesc}
                  </p>
                  <div className="mt-6 inline-flex items-center text-red-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Modal */}
        {selectedFeature && (
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedFeature(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-stone-900 mb-4">
                  {selectedFeature.title}
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedFeature.fullDesc}
              </p>
              <button
                onClick={() => setSelectedFeature(null)}
                className="mt-8 w-full bg-red-800 text-white py-4 rounded-full font-bold text-lg hover:bg-red-900 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-red-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">10K+</div>
              <div className="text-red-100 font-semibold">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">15+</div>
              <div className="text-red-100 font-semibold">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">50+</div>
              <div className="text-red-100 font-semibold">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">4.9★</div>
              <div className="text-red-100 font-semibold">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-stone-100 text-stone-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied pizza lovers who trust Pizza RK
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-red-800 hover:text-white text-stone-900 rounded-full p-4 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-red-800 hover:text-white text-stone-900 rounded-full p-4 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index =
                  (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div
                    key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-red-800 overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex mb-4 text-sm font-medium text-stone-500">
                        {testimonial.rating}/5
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4 shadow-md ring-2 ring-stone-200"
                        />
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-red-800 w-8"
                        : "bg-stone-300 hover:bg-red-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-red-800 py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <p className="text-red-200 text-sm font-semibold uppercase tracking-wider mb-4">
            First order offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to try us?
          </h2>

          <p className="text-xl text-red-100 mb-2">
            10% off your first order.
          </p>

          <p className="text-red-200/90 mb-10 max-w-lg mx-auto">
            Order now and discover why we're the most loved pizza place in town.
          </p>

          <button
            onClick={() => setCurrentPage("menu")}
            className="px-12 py-4 bg-white text-red-800 hover:bg-stone-50 font-bold text-lg rounded-full transition-all duration-200 shadow-lg"
          >
            View menu
          </button>

          <div className="mt-8 flex items-center justify-center gap-4 text-red-200 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No code needed
            </span>
            <span className="w-px h-4 bg-red-300/50"></span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Applied automatically
            </span>
            <span className="w-px h-4 bg-red-300/50"></span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Free delivery
            </span>
          </div>
        </div>
      </section>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
