import React, { useContext } from "react";
const ThemeContext = React.createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

export { ThemeContext, ThemeButton };
