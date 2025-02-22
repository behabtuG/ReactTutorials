//let str=”A crowd of 300 were expected.” Replace a number 300 by a word ‘three hundred’ in a given string.
let str = "A crowd of 300 were expected.";

// Replace the number 300 with the word "three hundred"
let newStr = str.replace(/\d{1,}/g, "three hundred");
let newStr1 = str.replace(/\b300\b/g, "three hundred");

console.log("New string:", newStr); //New string: A crowd of three hundred were expected.
console.log("New string:", newStr1); //New string: A crowd of three hundred were expected.
