/*fetch(`https://jsonplaceholder.typicode.com/1`)
  .then((response) => response.json())
  .catch((error) => console.log("Error:", error));
  */
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
