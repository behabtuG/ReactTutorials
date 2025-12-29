//?let str1=”JS learning is fun”. Find out if str1 contains substring “learning” and if yes then
//? fetch later part of string after “learning” into new string str2.
let str1 = "JS learning is fun";

// Check if str1 contains the substring "learning"
let index = str1.indexOf("learning");

if (index !== -1) {
  // If "learning" is found, extract the later part of the string
  let str2 = str1.substring(index + "learning".length).trim();
  console.log("str2:", str2);
} else {
  console.log("Substring 'learning' not found in str1.");
}
