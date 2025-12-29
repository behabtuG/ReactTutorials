/*
In JavaScript, the arguments object is a special array-like object 
that is available within regular (non-arrow) functions. 
It provides a way to access the arguments passed to a function, even if 
those arguments were not explicitly defined as parameters in the function's parameter list.
*/

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(calculateSum(10, 203, 20, 300)); //533
console.log(calculateSum(20, 300, 236, 258, 45, 56)); //915
