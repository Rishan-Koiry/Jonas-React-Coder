import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span>123 Pizza Street, Food City, FC 12345</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span>info@pizzark.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-2xl">🕒</span>
                <span>Mon-Sun 11:00 AM - 11:00 PM</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
