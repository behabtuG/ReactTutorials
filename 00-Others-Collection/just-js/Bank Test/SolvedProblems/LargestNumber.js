let numbers = [3, 7, 2, 8, 5, 40];
let max = numbers[0]; // initialize to the first value

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The Largest number is:", max); //? Outputs: 40
