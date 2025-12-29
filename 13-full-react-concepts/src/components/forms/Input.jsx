import React, { useState } from "react";
const InputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <label> Enter text </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onSubmit={onInputChange}>
          Submit
        </button>
      </form>
      <br />
      <div>Entered Value: {inputValue}</div>
    </div>
  );
};

export default InputForm;
