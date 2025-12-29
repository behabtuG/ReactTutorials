import React, { useState } from "react";
import "./ControlledInput.css";

function ControlledInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="input-field"
      value={value}
      onChange={handleChange}
      placeholder="Enter text here..."
    />
  );
}

export default ControlledInput;
