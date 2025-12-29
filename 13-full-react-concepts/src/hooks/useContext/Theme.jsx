import React, { createContext, useContext } from "react";

const Contexts = createContext("light");

function Theme() {
  const theme = useContext(Contexts);
  return <h6>Theme: {theme}</h6>;
}

const Themes = () => {
  return (
    <div>
      <Contexts.Provider value="dark">
        <Theme />
      </Contexts.Provider>
    </div>
  );
};

export default Themes;

//? The Theme Context provides a value (“dark”) accessible via useContext in DisplayTheme.
//? This eliminates the need to pass props manually down the component tree.
