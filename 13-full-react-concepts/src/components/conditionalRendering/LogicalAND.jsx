import { useState } from "react";

function LogicalAnd() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogged(!isLogged)}>Toggle Login</button>
      {isLogged && <h1>Welcome back, User!</h1>}
    </div>
  );
}

export default LogicalAnd;
