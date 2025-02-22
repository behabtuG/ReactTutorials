import React, { useRef } from "react";
import "./UncontrolledInput.css";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert("Input value: " + inputRef.current.value);
  };

  return (
    <div className="input-container">
      <input type="text" ref={inputRef} className="text-input" />
      <button onClick={handleClick} className="get-value-button">
        Get Input Value
      </button>
    </div>
  );
}

export default UncontrolledInput;
