// Factorial using Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: 0! = 1 and 1! = 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

console.log(factorial(5)); // Output: 120 (5! = 5*4*3*2*1)
