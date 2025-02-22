import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

export default ThemeButton;
