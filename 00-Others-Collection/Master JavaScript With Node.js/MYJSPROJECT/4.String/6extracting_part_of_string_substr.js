//?Extracting part of a string using
//? 1.substr -> begin index and length of the cut
//? 2.substring -> begin index and end index of the cut

let str1 = "Your order number: DEZ-12345-099";

let str2 = "order number: ";

console.log(str1.substr(str1.indexOf(str2) + str2.length)); //DEZ-12345-099

console.log(str1.substring(0)); // 0-2  Your order number: DEZ-12345-099
