//? This hook provides a convenient way to interact with the browser's local storage, allowing you to persist
//? data across page refreshes or browser sessions.
import React from "react";
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

function UseLocalStorageExample() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <h2>UseLocalStorage Example</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default UseLocalStorageExample;
