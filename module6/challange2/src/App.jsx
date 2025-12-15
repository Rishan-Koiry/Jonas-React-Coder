import { useState } from "react";

const App = () => {
  const initialStep = 1;
  const initialCount = 0;

  const [step, setStep] = useState(initialStep);
  const [count, setCount] = useState(initialCount);

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
            onClick={() => setStep((s) => Math.min(20, s + 1))}
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-xl font-bold"
          >
            +
          </button>
        </div>

        {/* Range Slider for Step */}
        <div>
          <input
            type="range"
            min="1"
            max="20"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Count Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCount((c) => c - step)}
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

        {/* Reset Button - resets everything */}
        {(count !== initialCount || step !== initialStep) && (
          <div className="text-center">
            <button
              onClick={() => {
                setStep(initialStep);
                setCount(initialCount);
              }}
              className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold"
            >
              Reset All
            </button>
          </div>
        )}

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
