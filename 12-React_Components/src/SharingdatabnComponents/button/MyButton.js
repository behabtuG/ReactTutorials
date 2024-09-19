import React, { useState } from "react";

export const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Clicked {count} times</button>;
};
