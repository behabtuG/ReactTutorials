/*
"scope" refers to the context or visibility of variables and identifiers within a program. 
It defines where a particular variable or function is accessible or can be referenced in your code. 
Understanding scope is crucial for writing clean and maintainable JavaScript code.
    1. Global Scope
    2. Local Scope 
        a) Function Scope
        b) Block Scope
*/

let a = 100;
var d = 400;

function abc() {
  let b = 200;
  //console.log(a)
  console.log(b);
}

if (100 === 100) {
  let c = 300;
  //console.log(a)
}

abc();
