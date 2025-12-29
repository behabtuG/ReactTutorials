import React from "react";
import { useThemeStore } from "../stores/themeStore";

function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "10px",
      }}
    >
      <h1>Navbar</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
