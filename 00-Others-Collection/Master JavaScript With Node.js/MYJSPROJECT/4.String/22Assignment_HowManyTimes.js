//let str=”ASSEDFTTYUJKKIUHHSFFSSTYSS”. Find out how many times substring SS is repeated in str.
let str = "ASSEDFTTYUJKKIUHHSFFSSTYSS";

// Use regular expression with match() method to find all occurrences of "SS"
let matches = str.match(/SS/g);

// Count the number of occurrences
let count = matches ? matches.length : 0;

console.log("Number of occurrences:", count); //Number of occurrences: 3
