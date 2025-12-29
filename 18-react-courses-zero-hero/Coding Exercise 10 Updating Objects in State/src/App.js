import React from "react";

// Don't rename the "App" component
function App() {
  const [size, setSize] = React.useState({ width: "50", height: "50" });

  function handleChange(event) {
    const { value, name } = event.target;

    // TODO: Set new size using 'setSize' function. Remember, only one dimension (width or height) changed by one time.
    // Update only one field (width or height)
    setSize((prevSize) => ({
      ...prevSize, // keep other properties unchanged
      [name]: value,
    })); // update the changed property
  }

  // Don't change the implementation
  return (
    <>
      <div className="Container">
        <div
          className="Shape"
          style={{
            width: `${size.width || 0}%`,
            height: `${size.height || 0}%`,
          }}
        />
      </div>

      <h2>Change shape size</h2>

      <label>
        width
        <input
          type="range"
          name="width"
          min="1"
          max="100"
          value={size.width || 0}
          step="1"
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        height
        <input
          type="range"
          name="height"
          min="1"
          max="100"
          value={size.height || 0}
          step="1"
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default App;
