import React from "react";
import PropTypes from "prop-types";
import "./childStyle.css"; // Import the CSS file to ensure styles are applied

function ChildComponent({ message, user }) {
  return (
    <div className="child-container">
      <h2 className="child-message">Child Component</h2>
      <p className="child-message">{message}</p>
      <p className="child-user-info">
        <strong>User Name:</strong> {user.name}
      </p>
      <p className="child-user-info">
        <strong>User Age:</strong> {user.age}
      </p>
    </div>
  );
}

// Validating prop types
ChildComponent.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default ChildComponent;
