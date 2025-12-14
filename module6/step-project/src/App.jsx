import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);

  const messages = [
    { text: "Learn Programming 🤯" },
    { text: "Search for a american job 😅 " },
    { text: "Print Money 💴" },
  ];

  const nextStep = () => {
    if (step < messages.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Steps */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                step === num
                  ? "bg-black text-white scale-110"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-center text-lg font-semibold mb-8">
          Step {step}: {messages[step - 1].text}
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-5 py-2 rounded-lg bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={step === messages.length}
            className="px-5 py-2 rounded-lg bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
