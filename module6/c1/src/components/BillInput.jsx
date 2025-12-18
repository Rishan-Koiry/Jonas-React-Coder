import React from "react";

const BillInput = ({ bill, setBill }) => {
  return (
    <p className="mb-4">
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter bill amount"
      />
    </p>
  );
};

export default BillInput;
