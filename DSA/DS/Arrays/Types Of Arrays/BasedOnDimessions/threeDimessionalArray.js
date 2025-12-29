var myArr = new Array();
myArr[0] = new Array();
myArr[0][0] = new Array();
myArr[0][0][0] = "Howdy";
myArr[0][0][1] = "pardner";

console.log(myArr[0][0][1]); // Alerts 'pardner'
// console.table(myArr);

let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push"],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
  // Only change code above this line
];

console.log(myNestedArray[2][5][0]); // Output: "deep"
console.table(myNestedArray);

let my3DArray = [
  [
    // Layer 0
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    // Layer 1
    [7, 8, 9],
    [10, 11, 12],
  ],
  [
    // Layer 2
    [13, 14, 15],
    [16, 17, 18],
  ],
];

console.log(my3DArray); // Output: 12
console.table(my3DArray);
console.log(my3DArray[1][0][2]); // Output: 9 (Layer 1, Row 0, Column 2)
console.log(my3DArray[2][1][0]); // Output: 16 (Layer 2, Row 1, Column 0)
