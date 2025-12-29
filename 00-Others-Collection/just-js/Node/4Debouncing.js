// 4. Debouncing API calls with lodash
//prevent too many requests in a short period by debouncing API calls. if you're handling user input,
//such as typing in a search bar or filtering a list, you don't want to make an API call every time the user types a
//  character.This can result in excessive requests.
const _ = require("lodash");
const fetchData = () => console.log("API call made!");
const debouncedFetchData = _.debounce(fetchData, 300); //300ms debounce

//call this function on every input change
debouncedFetchData();

// the 300ms is the amount of time the code will wait after the last call to debouncedFetchData before calling fetchData.
