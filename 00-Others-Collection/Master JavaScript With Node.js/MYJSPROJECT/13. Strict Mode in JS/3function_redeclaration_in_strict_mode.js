/*
Function redeclaration in Strict Mode
*/
"use strict";

if (100 === 100) {
  function abc() {
    console.log(100);
  }

  function abc() {
    console.log(200);
  }

  abc();
}
