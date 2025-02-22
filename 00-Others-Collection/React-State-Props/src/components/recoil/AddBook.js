// AddBook.js

import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { bookListState } from "../../recoil/atoms";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const setBooks = useSetRecoilState(bookListState); // Set the book list state

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, { title, author }]); // Add new book to the list
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

//?In this component, useSetRecoilState is used to update the bookListState atom.
//? When the form is submitted, the new book is added to the list.
