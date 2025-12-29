/*
Understanding how this reference work in strict mode
*/

"use strict";
function abc() {
  console.log(this);
}

const obj1 = {
  prop: 100,
  fun1: function () {
    console.log(this);
  },
};

obj1.fun1();
abc();
