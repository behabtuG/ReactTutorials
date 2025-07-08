// reducer.js

import { ADD_BOOK } from "../actions/actions";

// Initial state of the book list

const initialState = {
  books: [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ],
};

// Reducer function to handle actions

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state, // Keep the current state
        books: [...state.books, action.payload], // Add new book to the list
      };
    default:
      return state; // If action type doesn't match, return the current state
  }
};

export default bookReducer;

//? The bookReducer checks the action.type. If it's ADD_BOOK, it adds the new book (found in action.payload)
//? to the books array.
//?The reducer always returns a new state object instead of mutating the old state.
