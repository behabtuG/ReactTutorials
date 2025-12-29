import React, { useState } from "react";
import "./flex.css";
import "./grid.css";
import "./position.css";

function Css3() {
  const [currentStyle, setCurrentStyle] = useState("flex");

  const switchStyle = (style) => {
    setCurrentStyle(style);
  };

  return (
    <div>
      <div className="switch-buttons">
        <button onClick={() => switchStyle("flex")}>Flexbox</button>
        <button onClick={() => switchStyle("grid")}>Grid</button>
        <button onClick={() => switchStyle("position")}>Position</button>
      </div>

      <div className={`container ${currentStyle}`}>
        <div className="items">Item 1</div>
        <div className="items">Item 2</div>
        <div className="items">Item 3</div>
        <div className="items">Item 4</div>
      </div>
    </div>
  );
}

export default Css3;
