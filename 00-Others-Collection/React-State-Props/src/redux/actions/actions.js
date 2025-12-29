// actions.js

// Action type

export const ADD_BOOK = "ADD_BOOK";

// Action creator to add a book

export const addBook = (title, author) => {
  return {
    type: ADD_BOOK,
    payload: { title, author },
  };
};

//?Here, addBook is an action creator that returns an action object with type: ADD_BOOK and
//? the payload containing the new book’s title and author.
