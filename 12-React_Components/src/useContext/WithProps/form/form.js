import React from "react";
import Button from "../button/Button";
import Panel from "../Panel";

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
};

export default Form;
