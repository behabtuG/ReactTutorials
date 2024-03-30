import React from "react";
import "./App.css";
import Card from "./components/UI/Card";
import UseReff from "./components/hooks/useRef/UseRef";
import UseState from "./components/hooks/useState/UseState";
import ControlledInput from "./components/Controller/ControlledInput";
import UncontrolledInput from "./components/Uncontrolled/UncontrolledInput";
import UseEffect from "./components/hooks/useEffect/UseEffect";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">User Interaction Components</h1>
      <div className="component-container">
        <Card>
          <Card>
            <h2>useState</h2>
            <UseState />
          </Card>
          <Card>
            <h2>useRef</h2>
            <UseReff />
          </Card>
          <Card>
            <h2>useEffect</h2>
            <UseEffect />
          </Card>
          <Card>
            <h2>Controlled Input</h2>
            <ControlledInput />
          </Card>
          <Card>
            <h2>Uncontrolled Input</h2>
            <UncontrolledInput />
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default App;
