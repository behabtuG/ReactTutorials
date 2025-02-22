import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct method
import { Provider } from "react-redux";
import appStore from "./redux/store"; // Ensure the store is correctly imported
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Correct way in React 18+
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
