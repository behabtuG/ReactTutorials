//? The reduce function excutes a reducer function on each element of the array, resulting in a single output value.
//? it doesn't modify the original array.

//? Use case: Summing up values or combining data in a meaningful way.

import React from "react";
const TotalAge = () => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  return <div>Total Age: {totalAge}</div>;
};

export default TotalAge;
