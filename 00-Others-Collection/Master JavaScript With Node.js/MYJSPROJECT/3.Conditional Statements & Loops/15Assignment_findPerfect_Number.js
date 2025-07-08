//? Write a program to find perfect numbers between 1 to 15.

// Iterate from 1 to 15
for (let number = 1; number <= 15; number++) {
  let sum = 0;
  // Find divisors of the current number and calculate their sum
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  // Check if the sum of divisors equals the number itself
  if (sum === number) {
    console.log(`${number} is a perfect number`);
  }
}
