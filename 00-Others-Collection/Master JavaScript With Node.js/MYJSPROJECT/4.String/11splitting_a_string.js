//?Splitting a string using delimiter
//?String gets converted to array after splitting

let str1 = "Sunday$Monday$Tuesday";

console.log(str1.split(/[^A-Za-z0-9]/)); //[ 'Sunday', 'Monday', 'Tuesday' ]

//myFunction();
