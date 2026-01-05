import React from "react";

const App = () => {
  const initState = {
    balance: 0,
    loan: 0,
    isActive: false,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "OPEN_ACCOUNT":
        return { ...state, isActive: true, balance: 150 };
      case "CLOSE_ACCOUNT":
        return { balance: 0, loan: 0, isActive: false };
      case "DEPOSIT":
        return { ...state, balance: state.balance + action.payload };
      case "WITHDRAW":
        if (state.balance < action.payload) return state;
        return { ...state, balance: state.balance - action.payload };

      case "REQUEST_LOAN":
        if (state.loan > 0) return state;
        return {
          ...state,
          loan: action.payload,
          balance: state.balance + action.payload,
        };
      case "PAY_LOAN":
        return { ...state, balance: state.balance - state.loan, loan: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Bank System with useReducer</h1>
      <p className="text-lg mb-6">Welcome to the bank system application!</p>
      <div className="mb-4 text-lg">
        <p>
          Balance: <span className="font-semibold">{state.balance}</span>
        </p>
        <p>
          Loan: <span className="font-semibold">{state.loan}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => dispatch({ type: "OPEN_ACCOUNT" })}
          disabled={state.isActive}
        >
          Open account
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => dispatch({ type: "DEPOSIT", payload: 150 })}
          disabled={!state.isActive}
        >
          Deposit 150
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => {
            if (state.balance === 0) {
              alert("Insufficient balance");
            } else {
              dispatch({ type: "WITHDRAW", payload: 50 });
            }
          }}
          disabled={!state.isActive}
        >
          Withdraw 50
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => dispatch({ type: "REQUEST_LOAN", payload: 5000 })}
          disabled={!state.isActive}
        >
          Request loan of 5000
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => dispatch({ type: "PAY_LOAN" })}
          disabled={!state.isActive}
        >
          Pay loan
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={() => dispatch({ type: "CLOSE_ACCOUNT" })}
          disabled={!state.isActive}
        >
          Close account
        </button>
      </div>
    </div>
  );
};

export default App;
