// BookList.js
import React from "react";
import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.books); // Access books from Redux store

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
