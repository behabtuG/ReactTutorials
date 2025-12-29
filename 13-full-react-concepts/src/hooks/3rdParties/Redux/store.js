import { createStore } from "redux";
import { taskReducer } from "./taskReducer";

// Creating Redux store with reducer
const store = createStore(taskReducer);

export default store;
