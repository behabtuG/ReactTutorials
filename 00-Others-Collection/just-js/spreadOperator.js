const a = [1, 2];
const b = [0, ...a, 3];
console.log(b); // [0, 1, 2, 3]
const c = [0, ...a, 3, 4];
console.log(c); // [0, 1, 2, 3, 4]
