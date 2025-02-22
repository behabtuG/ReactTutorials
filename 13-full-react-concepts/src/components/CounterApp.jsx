//?Use the useSelector hook to access the state and the useDispatch hook to dispatch actions.
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div>
      <h2>Redux Counter</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default CounterApp;
