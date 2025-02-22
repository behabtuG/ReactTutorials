/*
The rest parameter allows a function to accept an indefinite number of arguments as an array
*/

function abc(a, b, ...numbers) {
  console.log(a); //10
  console.log(b); //20
  console.log(numbers); //[ 30, 40, 50, 60 ]
  // for(let num of numbers){
  //     console.log(num)
  // }
}

abc(10, 20, 30, 40, 50, 60);
