import React from "react";
import BasicInput from "./BasicInput";

export default function reusable() {
  return (
    <>
      <BasicInput
        label="first"
        type="text"
        size="is-large"
        placeholder="some text"
      />
      <BasicInput
        label="first"
        type="text"
        size="is-large"
        placeholder="enter your Number"
        isError={true}
      />
      <BasicInput label="password" type="password" value="123" />
    </>
  );
}
