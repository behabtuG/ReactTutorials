import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered!");
  return <button onClick={onClick}>Click Me!</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Memoized callback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty dependency array ensures the function is not recreated on re-renders.

  return (
    <div>
      <h6>useCallback Example</h6>
      <p>Parent Component Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Parent Count
      </button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
