import React, { useState } from "react";

function IfElse() {
  const [isLogged, setIsLogged] = useState(false);

  if (isLogged) {
    return (
      <div>
        <h1>If Else Welcome back, User!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setIsLogged(true)}>Login</button>
      </div>
    );
  }
}

export default IfElse;
