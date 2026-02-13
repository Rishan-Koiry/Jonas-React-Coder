import React from "react";
import Footer from "./Footer";

const OrderHistory = ({ orderHistory = [], setCurrentPage }) => {
  const formatOrderDate = (ts) => {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isEmpty = !orderHistory || orderHistory.length === 0;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
              Order History
            </h1>
            <p className="text-stone-600">
              {isEmpty
                ? "Your past orders will appear here."
                : `${orderHistory.length} order${orderHistory.length === 1 ? "" : "s"} in history`}
            </p>
          </div>

          {isEmpty ? (
            <div className="bg-white rounded-3xl shadow-lg border border-stone-200 p-10 sm:p-14 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              <h2 className="text-xl font-semibold text-stone-800 mb-2">
                No orders yet
              </h2>
              <p className="text-stone-500 max-w-sm mx-auto mb-8">
                Once you place an order from the menu, it will show up here so you can see what you ordered and when.
              </p>
                <button
                  onClick={() => setCurrentPage("menu")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-800 text-white font-medium rounded-full hover:bg-red-900 transition-colors shadow-md"
                >
                Browse Menu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {orderHistory.map((order) => (
                <li
                  key={order.id || order.placedAt}
                  className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="px-5 sm:px-6 py-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-stone-900">
                        {formatOrderDate(order.placedAt)}
                      </p>
                      {(order.customerName || order.customerPhone) && (
                        <p className="text-sm text-stone-500 mt-0.5">
                          {order.customerName}
                          {order.customerName && order.customerPhone && " · "}
                          {order.customerPhone}
                        </p>
                      )}
                    </div>
                    <span className="text-lg font-bold text-red-800">
                      ${order.total}
                    </span>
                  </div>
                  <ul className="divide-y divide-stone-100">
                    {order.items?.map((item) => (
                      <li
                        key={item.name}
                        className="px-5 sm:px-6 py-3 flex items-center gap-4"
                      >
                        <img
                          src={item.imagename}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-stone-900">{item.name}</p>
                          <p className="text-sm text-stone-500">
                            {item.quantity} × {item.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {!isEmpty && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setCurrentPage("menu")}
                className="text-red-800 font-medium hover:underline"
              >
                Order again →
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default OrderHistory;
