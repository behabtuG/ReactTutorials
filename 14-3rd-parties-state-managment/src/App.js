// App.js

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
    >
      <Counter />
    </div>
  );
}

export default App;
