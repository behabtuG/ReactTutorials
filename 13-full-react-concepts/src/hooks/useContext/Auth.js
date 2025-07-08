import React, { useContext } from "react";
import AuthContext from "./auth-context";

const Auth = () => {
  // Now all the data stored in the context can
  // be accessed with the auth variable
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <div>
      <h6>Are you authenticated?</h6>
      {auth.status ? <p>Yes you are</p> : <p>Nopes</p>}

      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auth;
