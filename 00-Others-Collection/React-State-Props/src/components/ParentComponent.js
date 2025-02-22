import React from "react";
import ChildComponent from "./ChildComponent"; // Assuming ChildComponent is in the same directory
import "./parentStyle.css"; // Import the CSS file

function ParentComponent() {
  const message = "Hello from Parent Component!";
  const user = {
    name: "John Doe",
    age: 30,
  };

  return (
    <div className="parent-container">
      <h1 className="parent-title">Parent Component</h1>
      {/* Passing props to ChildComponent */}
      <ChildComponent message={message} user={user} />
    </div>
  );
}

export default ParentComponent;
