import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./pages/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/menu";
import Contact from "./pages/Contact";
import Cart from "./pages/cart";
import OrderTrack from "./pages/ordertrack";
import OrderHistory from "./pages/OrderHistory";
import "./App.css";

const ORDER_HISTORY_KEY = "pizza-rk-order-history";

const loadOrderHistory = () => {
  try {
    const raw = localStorage.getItem(ORDER_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveOrderToHistory = (order) => {
  const history = loadOrderHistory();
  history.unshift({ ...order, id: Date.now().toString(36) + Math.random().toString(36).slice(2) });
  if (history.length > 50) history.length = 50;
  localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(history));
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuFilter, setMenuFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState(() => loadOrderHistory());

  useEffect(() => {
    setOrderHistory(loadOrderHistory());
  }, [currentOrder]);

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const addToCart = (pizza) => {
    if (!pizza?.isAvailable) return;
    const existing = cart.find((item) => item.name === pizza.name);
    if (existing) {
      toast.success(`${pizza.name} — quantity updated in cart`);
    } else {
      toast.success(`${pizza.name} added to cart`);
    }
    setCart((prev) => {
      const existingPrev = prev.find((item) => item.name === pizza.name);
      if (existingPrev) {
        return prev.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (name, delta) => {
    setCart((prev) => {
      const item = prev.find((i) => i.name === name);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) return prev.filter((i) => i.name !== name);
      return prev.map((i) =>
        i.name === name ? { ...i, quantity: newQty } : i
      );
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
    toast.info(`${name} removed from cart`);
  };

  const placeOrder = (customer = {}) => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => {
      const price = parseFloat((item.price || "").replace(/[^0-9.]/g, "")) || 0;
      return sum + price * item.quantity;
    }, 0);
    const order = {
      items: cart.map(({ name, price, imagename, quantity }) => ({
        name,
        price,
        imagename,
        quantity,
      })),
      total: total.toFixed(2),
      placedAt: Date.now(),
      customerName: customer.name || "",
      customerPhone: customer.phone || "",
    };
    setCurrentOrder(order);
    saveOrderToHistory(order);
    setCart([]);
    toast.success("Order placed. Taking you to track your delivery.");
    handlePageChange("ordertrack");
  };

  const clearOrder = () => {
    setCurrentOrder(null);
    handlePageChange("menu");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />;
      case "about":
        return <About setCurrentPage={handlePageChange} />;
      case "menu":
        return (
          <Menu
            setCurrentPage={handlePageChange}
            filterType={menuFilter}
            setMenuFilter={setMenuFilter}
            addToCart={addToCart}
          />
        );
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />;
      case "orderhistory":
        return (
          <OrderHistory
            orderHistory={orderHistory}
            setCurrentPage={handlePageChange}
          />
        );
      case "cart":
        return (
          <Cart
            cart={cart}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
            setCurrentPage={handlePageChange}
            placeOrder={placeOrder}
          />
        );
      case "ordertrack":
        return (
          <OrderTrack
            order={currentOrder}
            clearOrder={clearOrder}
            setCurrentPage={handlePageChange}
          />
        );
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <ToastContainer
        position="top-right"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        menuFilter={menuFilter}
        setMenuFilter={setMenuFilter}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        hasOrder={!!currentOrder}
      />
      {renderPage()}
    </div>
  );
};

export default App;
