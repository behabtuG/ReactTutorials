//? 1. useNavigate
//? it's used for programmatic navigation, allowing you to redirect users or change routes without needing to render
//? a <Link> component.

import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleClick = () => {
  navigate("/home");
};

//? in this example, calling handleClick will navigate the user to the /home route.
