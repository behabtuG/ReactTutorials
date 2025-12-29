function testScope() {
  let insideFunction = "inside";
  console.log(insideFunction);
}

testScope();
//console.log(insideFunction); //? output: ReferenceError: insideFunction is not defined
