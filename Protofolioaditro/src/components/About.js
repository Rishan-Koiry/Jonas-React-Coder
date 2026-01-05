import React from "react";

function About({ data, skills }) {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {data.bio}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">
                  {data.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">
                  {data.email}
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
