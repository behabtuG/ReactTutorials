const start = process.hrtime();
let arr = [10, 20, 30, 40];
console.log(arr[2]);

const memoryUsage = process.memoryUsage();
const end = process.hrtime(start);

console.log(`Execution Time: ${end[0]}s ${end[1] / 1000000}ms`);
console.log(`Memory Usage: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
