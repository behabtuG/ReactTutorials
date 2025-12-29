//? 2.useParams
//? when you need to access dynamic parameters in your route,useParams is your go-to hook.it retrives the key-value pairs of
//? the current route parameters.
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const { id } = useParams();
useEffect(() => {
  fetchUserData(id);
}, [id]);

//? Here, id is the dynamic segment of the route (/user:/id)
