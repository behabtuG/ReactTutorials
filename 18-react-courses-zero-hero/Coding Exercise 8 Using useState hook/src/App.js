import React from "react";
import { Panel } from "./components/Panel.js";
import { specialities } from "./components/Specialities.js";

// Don't rename the "App" component
function App() {
  return (
    <>
      <h2>Specialities</h2>
      {specialities.map(({ name, description, defaultOpen }) => (
        <Panel title={name} defaultOpen={defaultOpen}>
          {description}
        </Panel>
      ))}
    </>
  );
}

export default App;
