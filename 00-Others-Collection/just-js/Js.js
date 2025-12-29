//+ acts as concatenation if nay operand is a string
//- always tries numeric conversion
/*console.log(1 + "2" + "2"); //1 +"2"-->"12";"12"+"2"-->"122"
console.log(1 + +"2" + "2"); //+"2"-->2; 1+2 +"2"-->3+"2"-->"32",
console.log(1 + -"1" + "2"); //-"1" -->-1; 1+(-1)+"2"-->0+"2"-->"02"
console.log(+"1" + "2" + "2"); //+1--> 1; 1+"1"+"2"-->"112"
console.log("A" + "B" + "2"); //AB2
console.log("A" - "B" + "2"); //"A"-"B"--> NaN; NaN+"2"--> "NaN2"
console.log("A" - "B" + 2); //"A"-"B"--> NaN; NaN+2 -->NaN
*/
const myobject = {
  name: "behabtu",
  age: 35,
  localtion: "addis ababa",
};

const objects = Object.values(myobject);
console.log(objects);
const entries = Object.entries(myobject);
console.log(entries);
