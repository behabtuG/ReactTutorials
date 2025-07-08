//?Find position (index) of a sub-string in main string
//? 1. indexOf  2. lastIndexOf

let str1 = "I like skills learning skills new skills sjbfjkgn";

let pos = str1.indexOf("skills");

console.log(str1.indexOf("skills")); //7

console.log(str1.indexOf("skills", pos + 1)); //23

console.log(str1.lastIndexOf("skills")); //34
