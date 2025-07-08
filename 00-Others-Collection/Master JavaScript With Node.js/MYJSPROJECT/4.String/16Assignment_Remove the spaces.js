//?let str1=” I like JavaScript programming “. Remove the spaces at the start and the end of string str1.
let str1 = " I like JavaScript programming ";
str1 = str1.trim(); // remove
console.log(str1); // Output: "I like JavaScript programming"
str1 = str1.trimLeft().trimRight();
console.log(str1); // Output: "I like JavaScript programming"
