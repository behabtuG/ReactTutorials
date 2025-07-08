/*
1. Scope: var is function-scoped. let is block-scoped
2. Declaration: Accessing a let variable before its declaration in the code will result in a ReferenceError.
3. Redeclaration: You can redeclare a variable using var without any error
*/

function example() {
  var a = 10;
  let b = 20;

  if (true) {
    var a = 30; // This reassigns the 'a' declared in the function scope.
    let b = 40; // This creates a new 'b' variable with block scope.
  }

  console.log(a); // Output: 30
  console.log(b); // Output: 20
}

example();
