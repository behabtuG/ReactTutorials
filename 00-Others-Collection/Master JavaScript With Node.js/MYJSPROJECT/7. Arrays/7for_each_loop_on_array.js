/*
For..each loop on array
*/

const arr = [25, 50, 100, 200, 400, 800];

arr.forEach(function (item, index, array) {
  console.log("Index: " + index + " Test " + item + " array: " + array);
});
//Index: 0 Test 25 array: 25,50,100,200,400,800
//Index: 1 Test 50 array: 25,50,100,200,400,800
//Index: 2 Test 100 array: 25,50,100,200,400,800
//Index: 3 Test 200 array: 25,50,100,200,400,800
//Index: 4 Test 400 array: 25,50,100,200,400,800
//Index: 5 Test 800 array: 25,50,100,200,400,800
