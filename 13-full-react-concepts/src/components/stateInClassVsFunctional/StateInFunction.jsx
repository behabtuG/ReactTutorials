import React, { useState } from "react";

const StateInFunciton = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Counter App using Functional Component : </h3>
      <h2>{count}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export default StateInFunciton;
