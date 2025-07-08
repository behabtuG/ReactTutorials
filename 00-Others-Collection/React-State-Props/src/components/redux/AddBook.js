// AddBook.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/actions";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch(); // Get dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(title, author)); // Dispatch addBook action
    setTitle(""); // Clear input fields
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
