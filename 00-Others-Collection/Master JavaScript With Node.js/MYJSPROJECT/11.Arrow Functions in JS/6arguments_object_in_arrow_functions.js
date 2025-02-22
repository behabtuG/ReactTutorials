/*
Arrow functions do not have their own arguments object. 
Instead, they inherit the arguments object from their 
containing (surrounding) non-arrow function.
*/
function nonArrowFunction() {
  console.log(arguments[0]);
  let arrowFunction = () => {
    console.log(arguments[1]);
  };
  arrowFunction();
}

nonArrowFunction(10, 20, 30);
