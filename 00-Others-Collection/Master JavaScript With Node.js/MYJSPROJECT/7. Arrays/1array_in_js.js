/*
Create an Array
Add Elements to Existing Array
Retrieve Elements from Array
Concept of Length
*/

let a = [10, 20, 30, 40, 50];

let b = ["Sun", "Mon", "Tue", "Wed"];

a[0] = 100;
b[1] = "Sat";
a[10] = 60;
console.log(a[3]); //40
console.log(a); //[ 100, 20, 30, 40, 50, <5 empty items>, 60 ]
console.log(b[5]); //undefined
console.log(b); //[ 'Sun', 'Sat', 'Tue', 'Wed' ]
console.log(a.length); //11

let c = {
  0: 6,
  1: 12,
  2: 24,
  3: 48,
  4: 96,
  5: 192,
  length: 6,
};

console.log(c); //{ '0': 6, '1': 12, '2': 24, '3': 48, '4': 96, '5': 192, length: 6 }
