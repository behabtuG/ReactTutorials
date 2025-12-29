/**
 * Create an object in JS with property as Month numbers and values as Month names. Print all the months after June.
 */

// Create object with month numbers as keys and month names as values
let months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

// Iterate over keys and print months after June
for (let monthNum in months) {
  if (monthNum > 6) {
    console.log(months[monthNum]);
  }
}
