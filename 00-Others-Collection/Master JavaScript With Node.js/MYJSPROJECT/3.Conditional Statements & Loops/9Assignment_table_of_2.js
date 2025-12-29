//?Write a program to print table of 2.

// Define the number for which we want to print the table
const number = 2;

// Print the table of the given number
console.log("Table of", number);
for (let i = 1; i <= 12; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
