import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [amount, setAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "INR", "BDT"];

  useEffect(() => {
    if (!fromCurrency || !toCurrency) return;

    const getRate = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/a0f44d902d44e57534ce0b03/latest/${fromCurrency}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch exchange rate");
        }

        const data = await res.json();

        setExchangeRate(data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getRate();
  }, [fromCurrency, toCurrency]);

  const convertedAmount =
    amount && exchangeRate ? (amount * exchangeRate).toFixed(2) : "";
  return (
    <div className="app">
      <div className="converter-container">
        <h1>💱 Currency Converter</h1>

        <div className="converter-box">
          <div className="input-group">
            <label>Amount</label>
            <input
              type="number"
              placeholder="Add money "
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
            />
          </div>

          <div className="currency-group">
            <div className="currency-input">
              <label>From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="">Select currency</option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div className="currency-input">
              <label>To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="">Select currency</option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && <div className="loading">Loading...</div>}

          {!loading && exchangeRate && (
            <div className="result">
              <h2>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
