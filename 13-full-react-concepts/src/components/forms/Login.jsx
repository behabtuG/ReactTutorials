import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here,
    // e.g., send data to a server
    console.log("Form submitted:", { username, email });
  };

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>Enter username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Email Id:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
      <br />
      <div>Entered Value: {username}</div>
    </div>
  );
};

export default Login;
