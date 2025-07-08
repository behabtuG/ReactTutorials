/*
Redeclaring JavaScript Functions
*/

function abc() {
  console.log(100);
}

var x = function abc() {
  console.log(600);
};

x(); //600
abc(); //100
