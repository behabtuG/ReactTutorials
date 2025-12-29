//?Searching for a specific value in string

let str1 = "Find the position of $ special character in this string.";

//indexOf

console.log(str1.indexOf("@")); //-1
console.log(str1.search(/[^A-Za-z0-9 ]/)); //21
