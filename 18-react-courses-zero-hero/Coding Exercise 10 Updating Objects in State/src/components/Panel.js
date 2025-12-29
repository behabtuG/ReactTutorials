import React, { useState } from "react";
import "../styles.css";

// Don't rename the "Panel" component
// export function Panel({ title, children, defaultOpen = false}) {
//but the above is not work always b/c 
export function Panel({ title, children, defaultOpen }) {
  // TODO: Replace current solution with 'isOpen' variable and 'setIsOpen' function with 'React.useState' hook
  //  to implement functionality for expand/collapse panel. Don't forget to set default value.

  //   const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isOpen, setIsOpen] = useState(() => defaultOpen || false);
  // let isOpen

  //   function setIsOpen(value) {
  //     isOpen = value;
  //   }

  return (
    <section>
      <h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
      </h3>

      {isOpen && <div>{children}</div>}
    </section>
  );
}
