import { useState } from "react";

function TernaryOperator() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <h1>Ternary Welcome back, User!</h1>
      ) : (
        <button onClick={() => setIsLogged(true)}>Login</button>
      )}
    </div>
  );
}

export default TernaryOperator;
