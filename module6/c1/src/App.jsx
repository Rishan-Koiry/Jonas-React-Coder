import React, { useState } from "react";
import BillInput from "./components/BillInput";
import TipSelector from "./components/TipSelector";
import Result from "./components/Result";

const App = () => {
  const [bill, setBill] = useState(0);
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Tip Calculator
        </h1>

        <BillInput bill={bill} setBill={setBill} />
        <TipSelector
          label="How did you like the service?"
          tip={myTip}
          setTip={setMyTip}
        />
        <TipSelector
          label="How did your friend like the service?"
          tip={friendTip}
          setTip={setFriendTip}
        />

        {bill ? (
          <Result
            bill={bill}
            tipAmount={tipAmount}
            total={total}
            resetHandler={resetHandler}
          />
        ) : (
          <h2 className="text-center text-gray-500">Please enter your bill</h2>
        )}
      </div>
    </div>
  );
};

export default App;
