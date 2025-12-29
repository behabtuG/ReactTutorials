//20. Currying
//Currying transforms a function with multiple arguments into a series of functions with a single argument.
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); //10
