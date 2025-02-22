let op = "Multiplication";

let num1 = 200;
let num2 = 50;

switch (op) {
  case "Addition":
    console.log("Addition is: ", num1 + num2);
    break;
  case "Subtraction":
    console.log("Subtraction is: ", num1 - num2);
    break;
  case "Multiplication":
    console.log("Multiplication is: ", num1 * num2); //Multiplication is:  10000
    break;
  case "Division":
    console.log("Division is: ", num1 / num2);
    break;
  default:
    console.log("Invalid operation");
    break;
}
