import React, { useRef } from "react";
import Input from "./useImperativeHandle";

const UseImperative = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <h6>useImperativeHandle Hook</h6>
      <Input onFocus={() => inputRef.current.focus()} ref={inputRef} />
    </div>
  );
};

export default UseImperative;
