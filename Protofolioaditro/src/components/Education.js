import React from "react";

function Education({ data }) {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Institution Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
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
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
