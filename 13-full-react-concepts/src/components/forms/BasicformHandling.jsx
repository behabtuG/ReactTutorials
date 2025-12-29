import React, { useState, useEffect } from "react";
// import "./Basic.css";

const BasicFormHandling = () => {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log({ username: username });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  useEffect(() => {
    if (submittedUsername) {
      alert(`Submitted username: ${submittedUsername}`);
    }
  }, [submittedUsername]);

  return (
    <div className="container">
      <h6>Basic Form Fields</h6>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username" className="label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="input"
          placeholder="Enter your username"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicFormHandling;
