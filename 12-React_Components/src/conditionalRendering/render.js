import React from "react";

const AdminPanel = () => {
  return <div>Welcome to the Admin Panel</div>;
};

const LoginForm = () => {
  return <div>Please log in to continue</div>;
};

const ConditionalRender = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
};

export default ConditionalRender;
