import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
} from "../redux/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state); // state is a number due to the reducer
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementCount())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(incrementCount())}>+</button>
    </div>
  );
};

export default Counter;
