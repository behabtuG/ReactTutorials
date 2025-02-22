/*
Add one or more items to the end of an array - PUSH
Remove the last item from the array - POP
Add one or more item to the start of the array - UNSHIFT
Remove the first item from an array - SHIFT
*/

let a = [10, -20, 30, 40, 50];

a.push(60, 70, 80);
console.log(a); //[10, -20, 30, 40, 50, 60, 70, 80]
a.pop();
console.log(a); //[10, -20, 30, 40, 50, 60, 70]
a.unshift(99, 88);
console.log(a); //[99, 88, 10, -20, 30, 40, 50, 60, 70]
a.shift();
console.log(a); //[88, 10, -20, 30, 40, 50, 60, 70]
