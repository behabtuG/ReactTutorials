//let str=”ASWAP34ASD678UJK99FGT54HUI”. Separate the alphabets and numbers from str into two different strings.
let str = "ASWAP34ASD678UJK99FGT54HUI";

// Separate alphabets and numbers using regular expressions
let alphabets = str.match(/[a-zA-Z]+/g).join("");
let numbers = str.match(/\d+/g).join("");

console.log("Alphabets:", alphabets); //Alphabets: ASWAPASDUJKFGTHUI
console.log("Numbers:", numbers); //Numbers: 346789954
