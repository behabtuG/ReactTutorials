export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = Date.now(); // Unique ID for alerts
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
