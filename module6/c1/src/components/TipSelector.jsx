import React from "react";

const TipSelector = ({ label, tip, setTip }) => {
  return (
    <p className="mb-4">
      {label}
      <select
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
        className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Amazing (20%)</option>
      </select>
    </p>
  );
};

export default TipSelector;
