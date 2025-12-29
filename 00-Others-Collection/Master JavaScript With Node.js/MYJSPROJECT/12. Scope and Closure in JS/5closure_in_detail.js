/*
Closures are a fundamental concept in JavaScript and refer to the ability of 
a function to retain access to variables from its containing (enclosing) scope 
even after that scope has exited.
*/

let c = 200;
function abc() {
  let a = 100;
  function xyz() {
    a++;
    c++;
    console.log(a);
    console.log(c);
  }
  return xyz;
}

let firstRun = abc();
let secondRun = abc();
firstRun();
secondRun();
