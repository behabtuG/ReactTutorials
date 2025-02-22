//?Extracting characters from string
//?  1. charAt
//? 2. str[]

let str = "BEHABTU";

console.log(str.charAt(0)); //B

console.log(str[str.length - 1]); //U

//Reversing a string
let temp = "";
for (let i = 0; i <= str.length - 1; i++) {
  temp = str[i] + temp;
}

console.log(temp); //UTBAHEB
