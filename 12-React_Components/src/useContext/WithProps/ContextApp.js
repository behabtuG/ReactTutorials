import React from "react";
import ThemeContext from "./ThemeContext";
import Form from "../WithProps/form/form";
import "./styles.css";

const ContextApp = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
};

export default ContextApp;
