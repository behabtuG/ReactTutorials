//? Write a program to find armstrong numbers from 1 to 500.
//?an Armstrong number (also known as Narcissistic number or plenary number) is a number that is equal to
//?the sum of its own digits each raised to the power of the number of digits.

// Iterate through numbers from 1 to 500
for (let number = 1; number <= 500; number++) {
  let numDigits = number.toString().length; // Calculate the number of digits
  let sum = 0;
  let temp = number;

  // Calculate the sum of digits raised to the power of the number of digits
  while (temp > 0) {
    let digit = temp % 10;
    let product = 1;
    // Calculate digit^numDigits without using a separate function
    for (let i = 0; i < numDigits; i++) {
      product *= digit;
    }
    sum += product;
    temp = Math.floor(temp / 10);
  }

  // Check if the number is an Armstrong number
  if (sum === number) {
    console.log(`${number} is an Armstrong number`);
  }
}
