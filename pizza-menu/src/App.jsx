import { useState } from "react";
import Navbar from "./pages/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/menu";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuFilter, setMenuFilter] = useState("all");

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />;
      case "about":
        return <About setCurrentPage={handlePageChange} />;
      case "menu":
        return (
          <Menu setCurrentPage={handlePageChange} filterType={menuFilter} />
        );
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        menuFilter={menuFilter}
        setMenuFilter={setMenuFilter}
      />
      {renderPage()}
    </div>
  );
};

export default App;
