import React, { useContext } from "react";
import ThemeContext from "../../WithProps/ThemeContext";

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
};

export default Button;
