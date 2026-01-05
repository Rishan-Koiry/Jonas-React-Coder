import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolioData.json";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          name={portfolioData.personal.name}
        />
        <main>
          <Home data={portfolioData.personal} />
          <About data={portfolioData.personal} skills={portfolioData.skills} />
          <Experience data={portfolioData.experience} />
          <Education data={portfolioData.education} />
          <Projects data={portfolioData.projects} />
          <Contact
            data={portfolioData.personal}
            socialLinks={portfolioData.socialLinks}
          />
        </main>
        <Footer
          name={portfolioData.personal.name}
          socialLinks={portfolioData.socialLinks}
        />
      </div>
    </div>
  );
}

export default App;
