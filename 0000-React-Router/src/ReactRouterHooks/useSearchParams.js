//? 6.useSearchParams
//? handling query parameters is straightforward with useSearchParams.
//? This hook allows you to read and modify the URL's quey string parameters.

import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();
const handleFilterChange = (filter) => {
  setSearchParams({ filter });
};

//? in this example,setSearchParams updates the query string with the selected filter,
//? which could be used to filter a list of items on the page.
