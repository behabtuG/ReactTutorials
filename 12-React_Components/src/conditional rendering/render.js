import React from "react";

export const render = () => {
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
  //?When you don’t need the else branch, you can also use a shorter logical && syntax:

  <div>{isLoggedIn && <AdminPanel />}</div>;
  return <div>{content}</div>;
};
