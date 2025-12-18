import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const avgTip = (myTip + friendTip) / 2;
  const tipAmount = bill ? bill * avgTip : 0;
  const total = bill ? Number(bill) + tipAmount : 0;

  const resetHandler = () => {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </p>

      <p>
        How did you like the service?
        <select onChange={(e) => setMyTip(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2">Amazing (20%)</option>
        </select>
      </p>

      <p>
        How did your friend like the service?
        <select onChange={(e) => setFriendTip(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2">Amazing (20%)</option>
        </select>
      </p>

      {/* 🔥 SHOW RESULT ONLY IF BILL EXISTS */}
      {bill && (
        <>
          <h2>
            You pay ${total.toFixed(0)} (${bill} + ${tipAmount.toFixed(0)} tip)
          </h2>

          <button onClick={resetHandler}>Reset</button>
        </>
      )}
    </div>
  );
};

export default App;
