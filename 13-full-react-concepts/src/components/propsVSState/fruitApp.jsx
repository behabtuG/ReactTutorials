import React from "react";

const Fruit = (props) => {
  return (
    <div>
      <h1>List of Fruits</h1>
      <p>Name: {props.fruits.name}</p>
      <p>Color: {props.fruits.color}</p>
    </div>
  );
};

export default Fruit;
