// Home Page Component
import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Home;
