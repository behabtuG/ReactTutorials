import React, { useState } from "react";
import "./UseState.css";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <div className="count-container">
        <p className="count">{count}</p>
      </div>
      <div className="button-container">
        <button className="increment-button" onClick={incrementCount}>
          +
        </button>
        <button className="decrement-button" onClick={decrementCount}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
