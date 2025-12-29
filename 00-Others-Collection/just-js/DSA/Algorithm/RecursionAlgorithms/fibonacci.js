const fibonacci = (n) => {
  if (n <= 1) {
    return n; // Base case
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
  }
};

console.log(fibonacci(6)); // Output: 8 (F(6) = 8)
