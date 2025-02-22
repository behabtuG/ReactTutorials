import { useState, useEffect } from "react";
function UseFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}

export default UseFetch;

//? useFetch is a custom hook for fetching data from a given URL.
//? It uses useEffect to fetch data when the URL changes and updates the data state.
