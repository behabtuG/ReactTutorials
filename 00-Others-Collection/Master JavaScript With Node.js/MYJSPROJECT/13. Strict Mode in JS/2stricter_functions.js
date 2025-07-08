/*
1. Duplicate parameter names not allowed
2. Blocked scope function declarations
*/
"use strict";

// function abcd(x, x){   //Not allowed in strict mode
//     console.log(x)
// }

if (100 === 100) {
  function abc(x) {
    console.log(x);
  }
}

abc(20);
