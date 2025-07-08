//? This hook provides a reusable way to manage event listeners in React components, allowing you to attach
//? and clean up event listners based on component lifecycle events or state changes
import React, { useState, useRef, useEffect } from "react";

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element || !element.addEventListener) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

function UseEventListenerExample() {
  const [keyPressed, setKeyPressed] = useState("");

  useEventListener("keydown", (event) => {
    setKeyPressed(event.key);
  });

  return (
    <div>
      <h2>UseEventListener Example</h2>
      <p>Key pressed: {keyPressed}</p>
    </div>
  );
}

export default UseEventListenerExample;
