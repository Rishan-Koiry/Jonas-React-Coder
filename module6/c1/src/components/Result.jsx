import React from "react";

const Result = ({ bill, tipAmount, total, resetHandler }) => {
  console.log({ bill, tipAmount, total });
  
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        You pay{" "}
        <span className="text-blue-500">
          ${total.toFixed(0)} (${bill.toFixed(0)} + ${tipAmount.toFixed(0)} tip)
        </span>
      </h2>
      <button
        onClick={resetHandler}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
