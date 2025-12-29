/*
Closures are a fundamental concept in JavaScript and refer to the ability of 
a function to retain access to variables from its containing (enclosing) scope 
even after that scope has exited.
*/

function abc() {
  let a = 100;
  function xyz() {
    console.log(a);
  }
  return xyz;
}

let firstRun = abc();
firstRun();
