//?Write a program to to find prime numbers in between 1 and 20.

// Iterate through each number in the range
for (let i = 1; i <= 20; i++) {
  let isPrime = true;

  // Check if the number is prime
  if (i === 1) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  // If the number is prime, print it
  if (isPrime) {
    console.log(i);
  }
}
