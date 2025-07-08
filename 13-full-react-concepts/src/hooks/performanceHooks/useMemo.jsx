import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Memoized value for expensive computation
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, []); // This computation runs only once since the dependency array is empty.

  return (
    <div>
      <h6>useMemo Example</h6>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment: {count}
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default UseMemo;
