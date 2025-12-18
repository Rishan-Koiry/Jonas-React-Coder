import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const accordionData = [
    {
      title: "React",
      content:
        "React is a JavaScript library developed by Facebook for building fast and interactive user interfaces. It uses a component-based architecture and allows developers to create reusable UI elements.",
    },
    {
      title: "Python",
      content:
        "Python is a versatile, high-level programming language known for its readability and simplicity. It's widely used in web development, data science, AI, automation, and scripting.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript is a dynamic programming language primarily used for client-side web development. It enables interactive web pages, DOM manipulation, and works alongside HTML and CSS.",
    },
    {
      title: "Node.js",
      content:
        "Node.js is a runtime environment that allows developers to run JavaScript on the server. It’s built on Chrome's V8 engine and is popular for building scalable network applications.",
    },
    {
      title: "CSS",
      content:
        "CSS (Cascading Style Sheets) is used to style HTML documents. It controls layout, colors, fonts, and responsive designs, enabling web pages to look visually appealing.",
    },
    {
      title: "HTML",
      content:
        "HTML (HyperText Markup Language) is the standard markup language used to create web page structures. It organizes content using elements like headings, paragraphs, links, and images.",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto my-16 px-6 font-inter">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-md hover:shadow-lg transition-all duration-200`}
          >
            <div
              onClick={() => handleToggle(index)}
              className={`flex items-center gap-4 p-5 cursor-pointer select-none rounded-lg transition-colors duration-200 ${
                activeIndex === index
                  ? "bg-green-50"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {/* Number */}
              <span
                className={`w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 text-lg font-bold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-green-500 text-white shadow"
                    : "bg-white text-gray-900 shadow-sm"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg flex-1 m-0">
                {item.title}
              </h3>

              {/* Plus/Minus Indicator with rotation */}
              <span
                className={`text-green-500 font-bold text-4xl ml-auto transition-transform duration-300 inline-block ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-[600px] opacity-100 py-6 pl-14 pr-6"
                  : "max-h-0 opacity-0 py-0 pl-14 pr-6"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed m-0">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
