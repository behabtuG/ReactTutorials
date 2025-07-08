let number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (num in number) {
  //   console.log(number);
  //   console.log(num);
  if (num % 15 == 0) {
    console.log("(num) fizz buzz");
  }
  if (num % 3 == 0) {
    console.log("(num) fizz");
  } else if (num % 5 == 0) {
    console.log("(\num) buzz");
  } else {
    console.log(num);
  }
}
