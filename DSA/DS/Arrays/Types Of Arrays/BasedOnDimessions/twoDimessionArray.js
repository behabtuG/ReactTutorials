//? Two Dimensional Array to access a single element in the 2D array array[rowIndex][columnIndex]
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("---access single emelemt---", matrix[1][2]); // Output: 6 (Second row, third column)

let mat = [
  [10, 20, 30],
  [40, 50, 60],
  [20, 50, 70],
];

console.log("---access all array--", mat); // Output: [ [ 10, 20, 30 ], [ 40, 50, 60 ], [ 20, 50, 70 ] ]

//? How to create a 2D array in JavaScript
const rows = 3;
const columns = 4;
const mats = Array.from({ length: rows }, () => new Array(columns).fill(9));
console.log("---create 2d array---", mats); // Output: [ [ 9, 9, 9, 9 ], [ 9, 9, 9, 9 ], [ 9, 9, 9, 9 ] ]

//?How to Access Elements in a JavaScript 2D Array
let MathScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "C"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];
// console.log(MathScore);
// console.table("***first ouptput ***", MathScore); // Output: displays the 2D array in a tabular format

console.log("--access row 5 and column 1 --", MathScore[4][0]); // returns 'Ben Liard'
console.log("--access row 3 and column 2 --", MathScore[2][1]); // returns 5
console.log("--access row 2 and column 4 --", MathScore[1][3]); // returns 'C'
console.log("--access row 3 and column 3 --", MathScore[2][2]); // returns 24

//?How to access the first and last elements of a 2D array
console.log("--access 1st element--", MathScore[0][0]); // returns 'John Doe'
console.log(
  "--access last element--",
  MathScore[MathScore.length - 1][MathScore[MathScore.length - 1].length - 1]
); // returns B

console.log("--before insertion--", MathScore); // Output: displays the 2D array in a list format

//?The push() method adds elements(s) to the end of the 2D array,
//? while the unshift() method adds element(s) to the beginning of the 2D array.
//?How to insert an element into a 2D array
MathScore.push(["Tom Right", 30, 32, "B"]); // adds elements(s) to the end of the 2D array
MathScore.unshift(["Alice George", 28, 62, "A"]); // adds a new row at the beginning of the 2D array
MathScore[0].push("B"); // adds 'B' to the end of the first row
console.table(MathScore); // Output: displays the 2D array in a tabular format
console.log("--after insertion --", MathScore); // Output: displays the 2D array in a list format

let MathScores = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];
/* This code snippet is iterating over each sub-array (or row) in the `MathScores` 2D array. For each
sub-array, it calculates the sum of the second and third elements (index 1 and index 2) and stores
this sum in a new variable `totalScore`. Finally, it pushes this `totalScore` value to the end of
the current sub-array, effectively adding a new element to each row of the `MathScores` array. */
MathScores.forEach((score) => {
  let totalScore = score[1] + score[2];
  score.push(totalScore);
});

console.log("--forEach add column 1 & 2--", MathScores);

//? splice() method to insert at the middle of the array:
MathScores.splice(2, 0, ["Alice George", 28, 62, "A"]);
console.log("---splice--", MathScores); //iterating over each sub-array (or row) in the `MathScores` 2D array. For each

//? How to add all elements of a 2D array
let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];

var sum = 0;
numberArr.forEach((row) => {
  row.forEach((element) => {
    sum += element;
  });
});
console.log("The sum of all elements in the array is:" + sum); // returns "The sum of all elements in the array is: 380"
console.table(numberArr); //

//?How to remove an element from a 2D array
let RemoveScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

RemoveScore.pop(); // removes the last row from the 2D array

RemoveScore.shift(); // removes the first row from the 2D array
console.log("--after remove--", RemoveScore);

//?How to remove a column from a 2D array
let RemoveFromScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

RemoveFromScore.forEach((score) => {
  score.pop();
});

console.log(RemoveFromScore);
RemoveFromScore.splice(2, 1); // removes the row at index 2
console.log(RemoveFromScore);

//?
let arr = [];
let rowss = 4;
let columnss = 3;

// creating two-dimensional array
for (let i = 0; i < rowss; i++) {
  arr[i] = [];
  for (let j = 0; j < columnss; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);

let arr1 = [];
let rows1 = 4;
let columns1 = 3;

let value = 0;
// creating two-dimensional array
for (let i = 0; i < rows1; i++) {
  arr1[i] = [];
  for (let j = 0; j < columns1; j++) {
    arr1[i][j] = value++;
  }
}

console.log(arr1);

const create2Darr = (row, column) => {
  let arr = [];
  let value = 0;

  // creating two-dimensional array
  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < column; j++) {
      arr[i][j] = value++;
    }
  }
  console.log(arr);
};

let row = 5;
let column = 5;
create2Darr(row, column);

//?How to Update Elements in 2D Arrays in JavaScript
let array = [1, 2, 3];
array[1] = 5;

console.log(array); // returns [1, 5, 3]

let UpdateScore = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

UpdateScore[1] = ["Alice George", 28, 62, "A"];
console.log(UpdateScore);

let UpdateScores = [
  ["John Doe", 20, 60, "A"],
  ["Jane Doe", 10, 52, "B"],
  ["Petr Chess", 5, 24, "F"],
  ["Ling Jess", 28, 43, "A"],
  ["Ben Liard", 16, 51, "B"],
];

UpdateScores[2][0] = "Jack Jim";
console.log(UpdateScores);
