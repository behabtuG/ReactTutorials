import React, { useState, useContext } from "react";

// Create Context
const Context = React.createContext(null);

function Parent() {
  const [fName, setfName] = useState("Kidest");
  const [lName, setlName] = useState("Anteneh");

  const handleFirstNameChange = (e) => setfName(e.target.value);
  const handleLastNameChange = (e) => setlName(e.target.value);

  return (
    <Context.Provider value={{ fName, lName }}>
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
          <ChildA />
        </div>
      </div>
    </Context.Provider>
  );
}

function ChildA() {
  return (
    <div style={styles.component}>
      <h3>ChildA Component</h3>
      <ChildB />
    </div>
  );
}

function ChildB() {
  return (
    <div style={styles.component}>
      <h3>ChildB Component</h3>
      <ChildC />
    </div>
  );
}

function ChildC() {
  const { fName, lName } = useContext(Context);
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
