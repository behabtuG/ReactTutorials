//?Create a program to find out length of string and if length is odd number
//? then append extra character ‘d’ at the end of string.
let str = "hello";

// Find the length of the string
let length = str.length;

// Check if the length is odd
if (length % 2 !== 0) {
  // If length is odd, append 'd' at the end
  str += "d";
}

console.log("Modified string:", str); //Modified string: hellod
