import React from "react";
import { Button } from "./components/Button";

// Don't change 'days' array
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Don't rename the "App" component
function App() {
  // Don't change "handleClick" function
  function handleClick(day) {
    alert(`You selected ${day}`);
  }

  return (
    <>
      <h2>Day of the weeks</h2>
      <ul>
        {days.map((day) => (
          <li key={day}>
            {/* Show button only for Mon–Fri */}
            {["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day) && (
              <Button day={day} onClick={handleClick} />
            )}
            {/* TODO: Display 'Button' component only for 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' here */}
            {/* TODO: Pass the 'handleClick' function as `onClick` prop into 'Button' component */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
