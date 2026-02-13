import React, { useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Cart = ({
  cart,
  updateCartItemQuantity,
  removeFromCart,
  setCurrentPage,
  placeOrder,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [formError, setFormError] = useState("");

  const isEmpty = !cart || cart.length === 0;

  const handlePlaceOrder = () => {
    const name = customerName.trim();
    const phone = customerPhone.trim();
    if (!name) {
      setFormError("Please enter your name.");
      toast.warn("Please enter your name to place the order.");
      return;
    }
    if (!phone) {
      setFormError("Please enter your phone number.");
      toast.warn("Please enter your phone number to place the order.");
      return;
    }
    setFormError("");
    placeOrder({ name, phone });
  };

  const getItemTotal = (item) => {
    const price = parseFloat((item.price || "").replace(/[^0-9.]/g, "")) || 0;
    return (price * item.quantity).toFixed(2);
  };

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat((item.price || "").replace(/[^0-9.]/g, "")) || 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <>
      <div className="min-h-screen bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            Your Cart
          </h1>
          <p className="text-stone-600 mb-8">
            {isEmpty
              ? "Review your order or start adding pizzas from our menu."
              : `${cart.reduce((s, i) => s + i.quantity, 0)} item(s) in your cart`}
          </p>

          {isEmpty ? (
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="p-8 sm:p-12 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-stone-100 mb-6">
                  <svg
                    className="w-16 h-16 text-stone-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-stone-800 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-stone-500 max-w-sm mx-auto mb-8">
                  You haven’t added any pizzas yet. Browse our menu and add your
                  favorites to get started.
                </p>
                <button
                  onClick={() => setCurrentPage("menu")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white font-medium rounded-full hover:bg-red-900 transition-colors shadow-md"
                >
                  View menu
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl shadow-sm border border-stone-200/80 p-4 flex gap-4 items-center"
                  >
                    <img
                      src={item.imagename}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-stone-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-red-800 font-medium">
                        ${getItemTotal(item)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateCartItemQuantity(item.name, -1)
                        }
                        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-medium transition-colors"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-medium text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartItemQuantity(item.name, 1)
                        }
                        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-medium transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="Remove"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Customer details form */}
              <div className="bg-white rounded-xl shadow-sm border border-stone-200/80 p-6">
                <h3 className="font-semibold text-stone-900 mb-4">Your details</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="cart-name" className="block text-sm font-medium text-stone-600 mb-1">
                      Name *
                    </label>
                    <input
                      id="cart-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cart-phone" className="block text-sm font-medium text-stone-600 mb-1">
                      Phone number *
                    </label>
                    <input
                      id="cart-phone"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. (555) 123-4567"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>
                {formError && (
                  <p className="text-red-600 text-sm mb-4">{formError}</p>
                )}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-600 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-stone-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-3.5 bg-red-800 text-white font-semibold rounded-full hover:bg-red-900 transition-colors shadow-md"
                >
                  Place Order
                </button>
                <p className="text-center text-sm text-stone-500 mt-3">
                  You’ll be taken to track your order after placing it.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Cart;
