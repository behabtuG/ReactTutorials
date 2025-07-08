// Filename - App.js

import React, { useState } from "react";

const StateArray = () => {
  const [click, setClick] = useState([]);

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10,
      },
    ]);
  };

  return (
    <div>
      <h6>State Array</h6>
      <ul>
        {click.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Click me</button>
    </div>
  );
};

export default StateArray;
