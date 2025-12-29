//? It can be used across multiple forms in your application, reducing code duplication and promoting reusablility.
import React from "react";
import { useState } from "react";

const UseForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChange];
};

function UseFormExample() {
  const [formValues, handleInputChange] = UseForm({
    username: "",
    password: "",
  });

  return (
    <div>
      <h2>UseForm Example</h2>
      <input
        name="username"
        placeholder="Username"
        value={formValues.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <p>Username: {formValues.username}</p>
      <p>Password: {formValues.password}</p>
    </div>
  );
}

export default UseFormExample;
