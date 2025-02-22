import React from "react";
import { useUserSettings } from "../stores/themeStore";

function Settings() {
  const { darkMode, toggleDarkMode } = useUserSettings();

  return (
    <div>
      <h2>Dark Mode: {darkMode ? "On" : "Off"}</h2>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default Settings;
