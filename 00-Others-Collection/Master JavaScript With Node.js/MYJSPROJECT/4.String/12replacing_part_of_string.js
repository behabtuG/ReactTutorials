//?Replaceing parts of string
//? 1. Find and Replace using static string (only first match)
//?  2. Find and Replace using Regex (g - replace all matches / i - ignore case)

let str1 = "I Like Learning Like New LIKE Skills";

let str2 = str1.replace(/Like/gi, "Love");

console.log(str2); //I Love Learning Love New Love Skills

let str3 = "$56FGHG8789$%^&*9ghj*())667";

let str4 = str3.replace(/\d/g, "");

console.log(str4); //$FGHG$%^&*ghj*())
