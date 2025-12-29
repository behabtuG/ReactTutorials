// BookList.js

import React from "react";
import { useRecoilValue } from "recoil";
import { bookListState } from "../../recoil/atoms";

const BookList = () => {
  const books = useRecoilValue(bookListState); // Access book list state

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

//? In this component, useRecoilValue is used to access the bookListState atom, which holds the list of books.
//?  It renders each book in the list.
