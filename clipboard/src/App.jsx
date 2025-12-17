import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleCopy = (event) => {
      event.clipboardData.setData("text/plain", "bot"); // clear clipboard
      event.preventDefault();
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <div>
      <h1>Hello, Clipboard!</h1>
      <p>Try selecting and copying this text.</p>
    </div>
  );
};

export default App;
