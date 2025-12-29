/*
Hoisting is a behavior in JavaScript where variable and function declarations 
are moved to the top of their containing scope during the compilation phase, 
before the code is executed. 

Functions are hoisted but function expressions are not
*/

abc(); //TypeError: abc is not a function

var abc = function () {
  console.log(200);
};

console.log(a);

let a = 100;
