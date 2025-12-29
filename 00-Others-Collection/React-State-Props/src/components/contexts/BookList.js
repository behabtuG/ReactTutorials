import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const BookList = () => {
  const { books } = useContext(BookContext); // Access books from context

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
