/*
An Immediately Invoked Function Expression (IIFE) is a JavaScript design 
pattern that involves defining and executing a function immediately after 
its creation. This pattern is commonly used to create a private scope for
variables and functions within the function, preventing them from polluting 
the global scope.
*/

(function () {
  let a = 100;
  console.log(a); //100
})();
