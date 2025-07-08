import React, { useRef } from "react";

const Focus = () => {
  const input = useRef();

  const focus = () => input.current.focus();

  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Focus;

//? useRef stores a reference to the input element, allowing the focus function to programmatically set focus on it.
//? Updating inputRef does not cause the component to re-render.
