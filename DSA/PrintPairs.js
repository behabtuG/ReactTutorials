// function printPairs(arr) {
function printPairs(n) {
  //   for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i <= n; i++) {
    // for (let j = i + 1; j < arr.length; j++) {
    for (let j = i + 1; j <= n; j++) {
      //   console.log(`(${arr[i]}-${arr[j]})`);
      console.log(`(${i}-${j})`);
    }
  }
  console.log("DONE");
}
// printPairs([1, 2, 3, 4]);
printPairs(4);
