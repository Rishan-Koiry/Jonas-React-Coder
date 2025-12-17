import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0); // start from 0

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        {/* Step Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-xl font-bold"
          >
            -
          </button>

          <h4 className="text-lg font-semibold">
            Step: <span className="text-blue-600">{step}</span>
          </h4>

          <button
            onClick={() => setStep((s) => s + 1)}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-xl font-bold"
          >
            +
          </button>
        </div>

        {/* Count Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCount((c) => Math.max(0, c - step))} // never below 0
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold"
          >
            −
          </button>

          <h4 className="text-lg font-semibold">
            Count: <span className="text-blue-600">{count}</span>
          </h4>

          <button
            onClick={() => setCount((c) => c + step)}
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold"
          >
            +
          </button>
        </div>

        {/* Result */}
        <div className="text-center pt-4 border-t">
          <h2 className="text-lg font-medium">
            <span className="font-bold">{count}</span> days from today is
          </h2>
          <p className="text-blue-600 font-semibold mt-1">
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
