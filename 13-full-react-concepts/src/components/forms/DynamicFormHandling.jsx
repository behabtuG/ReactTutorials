import React, { useState } from "react";

const DynamicFormHandling = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index].value = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Form submitted with fields:",
      fields.map((field) => field.value)
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial,  sans-serif",
        maxWidth: "200px",
        margin: "auto",
      }}
    >
      <h6>Dynamic Form Fields</h6>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <input
              type="text"
              value={field.value}
              onChange={(event) => handleChange(index, event)}
              style={{
                padding: "8px",
                marginRight: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "200px",
              }}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              style={{
                padding: "8px",
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddField}
          style={{
            padding: "8px",
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Field
        </button>
        <button
          type="submit"
          style={{
            padding: "8px",
            background: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFormHandling;
