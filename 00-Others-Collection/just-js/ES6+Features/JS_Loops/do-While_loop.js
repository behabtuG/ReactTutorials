//? the 'do-while' loop gets executed at least once even if the the ci=ondition is false.

let index = 0;
do {
  //excute once before condition is checked
  console.log("hello world");
  //increment index or else we'll have an infinite loop
  index++;
} while (index < 10);
