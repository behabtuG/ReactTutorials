// store.js

import { createStore } from "redux";
import bookReducer from "./reducers/reducer";

// Create the Redux store with the reducer

const store = createStore(bookReducer);

export default store;

//? Here, the createStore function creates a Redux store using the bookReducer.
//? This store will now manage the state of the books.
