//?Searching for matches in a string using Regex

let str1 =
  "Original price of this product is $100 but after discount it'll be $69.99";

console.log(str1.match(/\${1}\d{1,}.?\d{1,}/g)); //[ '$100', '$69.99' ]
