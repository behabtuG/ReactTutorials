import React, { useRef } from "react";
const PreviousValue = () => {
  const [count, setCount] = React.useState(0);
  const prevCountRef = useRef();

  React.useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValue;
