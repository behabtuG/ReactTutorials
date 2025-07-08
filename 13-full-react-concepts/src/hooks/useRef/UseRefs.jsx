import React, { Fragment, useRef } from "react";

const Focuss = () => {
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    focusPoint.current.focus();
  };
  return (
    <div>
      <Fragment>
        <div>
          <button onClick={onClickHandler}>ACTION</button>
        </div>
        <label>
          Click on the action button to focus and populate the text.
        </label>
        <br />
        <textarea ref={focusPoint} />
      </Fragment>
    </div>
  );
};

export default Focuss;
