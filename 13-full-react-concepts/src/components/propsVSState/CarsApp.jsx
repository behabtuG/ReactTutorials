import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState("Ferrari");

  const changeMessage = () => {
    setCar("Jaguar");
  };

  return (
    <div>
      <h1>Best Car</h1>
      <p>{car}</p>
      <button onClick={changeMessage}>Change</button>
    </div>
  );
};

export default Car;
