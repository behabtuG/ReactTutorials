// src/store/reducers/alertReducer.js
import { SET_ALERT, REMOVE_ALERT } from "../actions/alertActions";

const initialState = [];

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;
