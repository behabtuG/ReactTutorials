import React, { useRef } from "react";
import "./UseRef.css";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div className="input-container">
      <input ref={inputEl} type="text" className="text-input" />
      <button onClick={onClick} className="focus-button">
        Focus the input
      </button>
    </div>
  );
}

export default TextInputWithFocusButton;
