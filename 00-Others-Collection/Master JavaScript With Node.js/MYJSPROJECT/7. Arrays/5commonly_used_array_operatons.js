/*
Converting array to string - JOIN
Get string representation of array - TOSTRING
Converting string to array - SPLIT
Reversing an array - REVERSE
Get section of an array - SLICE
*/

let colors = ["Red", "Blue", "Green", "Black", "White"];

console.log(colors.join("_")); //Red_Blue_Green_Black_White
console.log(colors.toString()); //Red,Blue,Green,Black,White
let s = "A_B_C_D_E";
console.log(s.split("_")); //["A", "B", "C", "D", "E"];
console.log(colors.reverse()); //[ 'White', 'Black', 'Green', 'Blue', 'Red' ]
console.log(colors.slice(1, 4)); //[ 'Black', 'Green', 'Blue' ]
