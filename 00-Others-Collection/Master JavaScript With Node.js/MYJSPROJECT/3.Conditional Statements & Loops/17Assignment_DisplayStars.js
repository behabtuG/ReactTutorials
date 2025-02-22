/**
 //? Write a program to display following output :   *
                **
                ***
                ****
                *****

 */

// Outer loop to iterate through each row
for (let i = 1; i <= 5; i++) {
  let pattern = ""; // Initialize an empty string for the current row pattern
  // Inner loop to create the pattern for the current row
  for (let j = 1; j <= i; j++) {
    pattern += "*"; // Append '*' to the pattern for each column
  }
  console.log(pattern); // Print the pattern for the current row
}
