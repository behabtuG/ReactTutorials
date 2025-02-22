const fibonacciSearch = (arr, target) => {
  let n = arr.length;

  // Initialize Fibonacci numbers
  let fib2 = 0; // F(k-2)
  let fib1 = 1; // F(k-1)
  let fib = fib1 + fib2; // F(k)

  // Find the smallest Fibonacci number >= n
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  // Initialize offset
  let offset = -1;

  // While there are elements to examine
  while (fib > 1) {
    // Calculate the index to compare
    let i = Math.min(offset + fib2, n - 1);

    // Compare the target with the current element
    if (arr[i] < target) {
      // Target in the right subarray
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      // Target in the left subarray
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      // Element found
      return i;
    }
  }

  // Check the last element
  if (fib1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
};

// Example usage
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

const result = fibonacciSearch(arr, target);
console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
