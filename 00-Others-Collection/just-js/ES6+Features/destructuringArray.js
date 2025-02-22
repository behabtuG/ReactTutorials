const colours = ["red", "green", "blue"];

const [firstcolor, secondcolor] = colours;
console.log(firstcolor, secondcolor); //?red, green

//! this also used to access the second and third colors
const [, secondscolor, thirdscolor] = colours;
console.log(secondscolor, thirdscolor); //?green, blue
//! to access the thrid color only
const [, , thirdcolor] = colours;
console.log(thirdscolor); //?green, blue
