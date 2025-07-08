import React, { useState } from "react";

function Parent() {
  const [fName, setfName] = useState("Behabtu");
  const [lName, setlName] = useState("Getnet");

  const handleFirstNameChange = (e) => setfName(e.target.value);
  const handleLastNameChange = (e) => setlName(e.target.value);

  return (
    <div style={styles.container}>
      <div style={styles.component}>
        <h2>Parent Component</h2>
        <label>
          First Name:
          <input
            type="text"
            value={fName}
            onChange={handleFirstNameChange}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lName}
            onChange={handleLastNameChange}
            style={styles.input}
          />
        </label>
      </div>
      <ChildA fName={fName} lName={lName} />
    </div>
  );
}

function ChildA({ fName, lName }) {
  return (
    <div style={styles.component}>
      <h3>ChildA Component</h3>
      <ChildB fName={fName} lName={lName} />
    </div>
  );
}

function ChildB({ fName, lName }) {
  return (
    <div style={styles.component}>
      <h3>ChildB Component</h3>
      <ChildC fName={fName} lName={lName} />
    </div>
  );
}

function ChildC({ fName, lName }) {
  return (
    <div style={styles.component}>
      <h3>ChildC Component</h3>
      <h4>Data from Parent:</h4>
      <p>
        <strong>First Name:</strong> {fName}
      </p>
      <p>
        <strong>Last Name:</strong> {lName}
      </p>
    </div>
  );
}

const styles = {
  container: {
    margin: "20px",
  },
  component: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
  },
  input: {
    marginLeft: "10px",
    padding: "5px",
  },
};

export default Parent;
