import { useState } from "react";
import Navbar from "./pages/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/menu";
import Contact from "./pages/Contact";
import PizzaLoader from "./components/PizzaLoader";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (page) => {
    setIsLoading(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
1
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 1000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />;
      case "about":
        return <About setCurrentPage={handlePageChange} />;
      case "menu":
        return <Menu setCurrentPage={handlePageChange} />;
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div>
      {isLoading && <PizzaLoader />}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default App;
