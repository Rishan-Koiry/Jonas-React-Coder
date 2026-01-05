import React from "react";

function Home({ data }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {data.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              {data.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8">
              {data.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
