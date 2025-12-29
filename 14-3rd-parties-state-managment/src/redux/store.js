// redux/store.js

import { createStore } from "redux"; // Import Redux method to create a store
import { currencyReducer } from "./reducers/currencyReducer"; // Import the reducer that handles the state

// Create the Redux store by passing the currencyReducer
const appStore = createStore(currencyReducer); // Store is now using the currencyReducer

// Export the store so it can be used throughout the app
export default appStore;
