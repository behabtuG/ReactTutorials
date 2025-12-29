import React, { useState } from "react";

const UseMemos = () => {
  const [number, setNumber] = useState(0);
  const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h6> Use by State </h6>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
};

// Function to square the value
function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default UseMemos;
/**
 *In this case, we can see that even if we changed the input number once, but clicked on-increment counter multiple
 *times our function squareNum got executed whenever we clicked the increment counter button multiple times. This is
 *happening because the App component re-renders whenever we change the state of the counter.
 *Now let’s solve this problem using the useMemo hook.
 *
 */
