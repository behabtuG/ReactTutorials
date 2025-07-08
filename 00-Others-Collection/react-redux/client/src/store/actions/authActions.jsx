import axios from "axios";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await axios.get("/api/auth/login", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } else {
      // Send the errors from backend to the reducer
      dispatch({ type: REGISTER_FAIL, payload: data.errors });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: REGISTER_FAIL, payload: [{ msg: "Server error" }] });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    localStorage.setItem("user", JSON.stringify(res.data.user));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    const errorMessage =
      err.response?.data?.errors?.[0]?.msg || "Login failed. Please try again.";
    dispatch({ type: LOGIN_FAIL, payload: errorMessage });
  }
};

// Logout User
export const logout = () => (dispatch) => {
  // Remove token from localStorage
  // localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};
