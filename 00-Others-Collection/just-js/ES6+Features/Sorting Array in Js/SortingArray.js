//! #2. Strings
const names = ["Mathias", "Behabtu", "Kidst", "Emeye", "Emuye"];

const sortedNames = names.sort();
console.log(sortedNames); //? [ 'Behabtu', 'Emeye', 'Emuye', 'Kidst', 'Mathias' ]

const namesReversed = sortedNames.reverse();
console.log(namesReversed); //? [ 'Mathias', 'Kidst', 'Emuye', 'Emeye', 'Behabtu' ]

//! #2. Numbers
const numbers = [10, 20, 5, 40, 100, 1];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); //? [ 1, 5, 10, 20, 40, 100 ]

//! 3. String with numbers
const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
const sortedItems = items.sort((a, b) => {
  return +a.slice(-1) - +b.slice(-1);
  //   return -a.slice(-1) - +b.slice(-1); //?[ 'item 5', 'item 4', 'item 3', 'item 2', 'item 1' ]
});
console.log(sortedItems); //? [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]

//! #4. String with long numbers
const regex = /\d+/;
const itemsLong = ["item 99", "item 1001", "item 5", "item 30", "item 465"];
const Sorted = itemsLong.sort((a, b) => {
  return a.match(regex) - b.match(regex);
});
console.log(Sorted); //? [ 'item 5', 'item 30', 'item 99', 'item 465', 'item 1001' ]

//! 5. Objects
const objs = [
  { id: 7, name: "Getnet" },
  { id: 10, name: "Behabtu" },
  { id: 4, name: "Kidest" },
  { id: 3, name: "Mathias" },
  { id: 11, name: "Emeye" },
];

const soretdObjs = objs.sort((a, b) => {
  return a.id - b.id;
});

console.log(soretdObjs);
//? [ { id: 3, name: 'Mathias' },
//? { id: 4, name: 'Kidest' },
//? { id: 7, name: 'Getnet' },
//?{ id: 10, name: 'Behabtu' },
//? { id: 11, name: 'Emeye' }]
