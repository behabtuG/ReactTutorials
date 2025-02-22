function testBlockScope() {
  for (let i = 0; i < 5; i++) {
    console.log(i); //? output: 0,1,2,3,4
  }
  // console.log(i); //? output:ReferenceError: i is not defined
}

testBlockScope();
