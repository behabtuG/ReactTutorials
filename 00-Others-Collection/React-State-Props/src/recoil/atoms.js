// atoms.js

import { atom } from "recoil";

// Atom to store the list of books

export const bookListState = atom({
  key: "bookListState", // unique key to identify the atom
  default: [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ], // initial state
});

//? Atoms in Recoil represent state that can be shared across components.
//? For the Book List app, we’ll create an atom to store the list of books.

//? Here, the bookListState atom stores the default list of books.
//? It will be used in components to access and update the book list.
