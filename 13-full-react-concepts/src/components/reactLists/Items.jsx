import React from "react";

const NumberList = ({ numbers }) => {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
