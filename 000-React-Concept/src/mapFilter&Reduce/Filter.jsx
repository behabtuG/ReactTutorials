//? The filter function Creates a new array containing only elements that pass a certain test implemented by
//? the provided function. It doesn't modify the original array.
//? Use case: Filtering a list of items based on a condition.

import React from "react";
const FilteredUsers = () => {
  const users = ["Alice", "Bob", "Charlie"];
  const filteredUsers = users.filter((user) => user.startsWith("A"));
  return (
    <div>
      <h6>Users List</h6>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredUsers;
