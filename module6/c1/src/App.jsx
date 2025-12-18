import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(null);
  const [friendTip, setFriendTip] = useState(null);

  const avgTip = (myTip + friendTip) / 2;
  const tipAmount = bill ? bill * avgTip : 0;
  const total = bill ? Number(bill) + tipAmount : 0;

  const resetHandler = () => {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Tip Calculator
        </h1>

        <p className="mb-4">
          How much was the bill?
          <input
            type="number"
            value={bill}
            onChange={(bill_input) => setBill(bill_input.target.value)}
            className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter bill amount"
          />
        </p>

        <p className="mb-4">
          How did you like the service?
          <select
            onChange={(my_tip) => setMyTip(Number(my_tip.target.value))}
            className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="0.1">It was good (10%)</option>
            <option value="0.2">Amazing (20%)</option>
          </select>
        </p>

        <p className="mb-6">
          How did your friend like the service?
          <select
            onChange={(friend_tip) =>
              setFriendTip(Number(friend_tip.target.value))
            }
            className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="0.1">It was good (10%)</option>
            <option value="0.2">Amazing (20%)</option>
          </select>
        </p>

        {bill ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              You pay <span className="text-blue-500">${total.toFixed(0)}</span>{" "}
              ( ${bill} + ${tipAmount.toFixed(0)} tip)
            </h2>
            <button
              onClick={resetHandler}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Reset
            </button>
          </div>
        ) : (
          <h2 className="text-center text-gray-500">Please enter your bill</h2>
        )}
      </div>
    </div>
  );
};

export default App;
