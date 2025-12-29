//?Validating the presence of sub-string in main string 'includes' method

let str1 = "it always seems impossible until it's done always";

let str2 = "always";
let pos = str1.indexOf(str2);
console.log(str1.includes(str2, pos + 1)); //true
