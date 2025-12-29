import React, { createContext, useState } from "react";

// Create the BookContext

export const BookContext = createContext();

// BookProvider component to provide the context

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  // Function to add a new book

  const addBook = (title, author) => {
    setBooks([...books, { title, author }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
