//?In react, the map,filter, and reduce array methods are frequently used for handling and transforming data in a concise
//?  and functional manner.
//?map() the map function is used to create a new array by applying a function to each element of the original array.
//?to each element of an existing array. it doesn't modify the original array
//? use case: Transforming a list of data int JSX elements.

import React from "react";
const Userlist = () => {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h6>Users List</h6>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
export default Userlist;

//? Here users.map((user, index) => ((...)) creates a new arry of <li> elements, each containing a user's name.
//?key ={index}is used to give each list item a unique key, which helps react efficeiently update and render the list
