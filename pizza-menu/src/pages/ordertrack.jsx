import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";

const STEPS = [
  { key: "placed", label: "Order placed", desc: "We received your order" },
  { key: "picked", label: "Preparing", desc: "Kitchen is preparing" },
  { key: "delivered", label: "Delivered", desc: "On its way" },
];

const DURATION_MS = 60 * 1000;

const OrderTrack = ({ order, clearOrder, setCurrentPage }) => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(60);
  const deliveredToastShown = useRef(false);

  useEffect(() => {
    if (!order?.placedAt) return;
    const start = order.placedAt;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(p);
      setRemainingSeconds(Math.max(0, 60 - Math.ceil(elapsed / 1000)));
      if (p >= 100) {
        setCompleted(true);
        if (!deliveredToastShown.current) {
          deliveredToastShown.current = true;
          toast.success("Your order has been delivered. Enjoy!");
        }
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [order?.placedAt]);

  const formatOrderDate = (ts) => {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!order) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
          <div className="max-w-2xl mx-auto px-4 py-16">
            <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8 sm:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h1 className="text-2xl font-bold text-stone-900 mb-2">Nothing to show</h1>
              <p className="text-stone-600 mb-8">Order pizza to see your delivery status here.</p>
              <button
                onClick={() => setCurrentPage("menu")}
                className="px-8 py-3 bg-red-800 text-white font-semibold rounded-full hover:bg-red-900 transition-colors shadow-md"
              >
                Order pizza
              </button>
              <button
                onClick={() => setCurrentPage("orderhistory")}
                className="block w-full mt-6 py-2 text-red-800 font-medium hover:underline"
              >
                View order history
              </button>
            </div>
          </div>
        </div>
        <Footer setCurrentPage={setCurrentPage} />
      </>
    );
  }

  const currentStepIndex = completed ? 2 : Math.min(2, Math.floor((progress / 100) * 3));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-2xl mx-auto px-4 py-10 sm:py-14">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
              Track your order
            </h1>
            <p className="text-stone-600">
              {order.customerName && (
                <span className="font-medium text-stone-800">{order.customerName}</span>
              )}
              {order.customerName && order.customerPhone && " · "}
              {order.customerPhone && (
                <span className="text-stone-600">{order.customerPhone}</span>
              )}
              {!order.customerName && !order.customerPhone && "We’re on it."}
            </p>
          </div>

          {/* Progress card */}
          <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start gap-4 mb-6">
                {STEPS.map((step, i) => (
                  <div key={step.key} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                        i <= currentStepIndex
                          ? "bg-red-800 text-white shadow-lg"
                          : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={`mt-3 text-sm font-semibold text-center ${
                        i <= currentStepIndex ? "text-stone-900" : "text-stone-400"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span className="text-xs text-stone-400 text-center mt-0.5 hidden sm:block">
                      {step.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-2.5 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-800 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-center text-stone-500 text-sm mt-4">
                {completed ? (
                  <span className="text-green-600 font-medium">Delivery complete!</span>
                ) : (
                  <>About <strong>{remainingSeconds}s</strong> remaining</>
                )}
              </p>
            </div>
          </div>

          {/* Order summary card */}
          <div className="bg-white rounded-3xl shadow-lg border border-stone-200 overflow-hidden mb-8">
            <div className="px-6 sm:px-8 py-5 bg-stone-50 border-b border-stone-200">
              <h2 className="font-bold text-stone-900 text-lg">What you ordered</h2>
              <p className="text-sm text-stone-500 mt-0.5">
                Placed {formatOrderDate(order.placedAt)}
              </p>
            </div>
            <ul className="divide-y divide-stone-100">
              {order.items.map((item) => (
                <li key={item.name} className="px-6 sm:px-8 py-4 flex items-center gap-4">
                  <img
                    src={item.imagename}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-900">{item.name}</p>
                    <p className="text-sm text-stone-500">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 sm:px-8 py-4 bg-stone-50 border-t border-stone-200 flex justify-between items-center">
              <span className="font-semibold text-stone-700">Total</span>
              <span className="text-xl font-bold text-red-800">${order.total}</span>
            </div>
          </div>

          {completed && (
            <div className="text-center space-y-3">
              <button
                onClick={clearOrder}
                className="px-10 py-3.5 bg-red-800 text-white font-semibold rounded-full hover:bg-red-900 transition-colors shadow-lg"
              >
                Order again
              </button>
              <button
                onClick={() => setCurrentPage("orderhistory")}
                className="block w-full py-2 text-red-800 font-medium hover:underline"
              >
                View order history →
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default OrderTrack;
