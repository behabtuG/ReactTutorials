import { useState } from "react";

function SwitchCase() {
  const [status, setStatus] = useState("guest");

  const render = () => {
    switch (status) {
      case "guest":
        return <button onClick={() => setStatus("user")}>Login</button>;
      case "user":
        return <h1>Welcome, User!</h1>;
      case "admin":
        return <h1>Admin Dashboard</h1>;
      default:
        return null;
    }
  };

  return <div>{render()}</div>;
}

export default SwitchCase;
