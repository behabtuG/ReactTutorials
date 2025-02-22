/*
Strict mode in function scope
*/

a = 100;
console.log(a);

function ab() {
  "use strict";
  let c = 100;
  console.log(c);
}

let abc = () => {
  "use strict";
  let b = 100;
  console.log(b);
};

abc();
ab();
