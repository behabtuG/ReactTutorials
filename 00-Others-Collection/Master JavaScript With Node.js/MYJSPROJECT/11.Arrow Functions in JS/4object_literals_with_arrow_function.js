/*
How to create object literals with arrow function
*/

let setCarMode = function (mode) {
  return { value: mode };
};

let setCarMode1 = (mode) => ({ value: mode });

const v1 = setCarMode("Sports");
console.log(v1.value);
const v2 = setCarMode1("V8");
console.log(v2.value);
