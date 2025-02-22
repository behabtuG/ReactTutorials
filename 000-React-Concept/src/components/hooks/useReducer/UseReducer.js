import React, { useReducer } from "react";
import "./Counter1.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <div className="count-text">Count: {state.count}</div>
      <div className="button-container">
        <button
          className="increment-button"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="decrement-button"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter1;
