import React from "react";
import ReactDOM from "react-dom/client";
import ParentComponent from "../src/components/ParentComponent"; // Assuming ParentComponent is in the same directory

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
