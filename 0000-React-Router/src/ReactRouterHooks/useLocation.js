//? 3. useLocation
//? its gives you access to the current location object, which includes information about the URL, such as the pathname,
//? search query, and hash.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const location = useLocation();
useEffect(() => {
  console.log("Current path: " + location.pathname);
}, [location]);
