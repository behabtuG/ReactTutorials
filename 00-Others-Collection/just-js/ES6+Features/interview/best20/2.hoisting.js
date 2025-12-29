//2. Hoisting
// in js, variable and function declarations are 'hoisted' to the top of their scope.
console.log(greet()); //Hello!

function greet() {
  return "Hello!";
}

console.log(num); //undefined
var num = 5;
