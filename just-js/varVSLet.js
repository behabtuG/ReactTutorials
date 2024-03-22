function compareVarAndLet() {
  for (var i = 0; i < 3; i++) {
    //Some code
  }
  console.log(i); //? output: 3 because 'var' is function-scoped, not block-scoped
}

compareVarAndLet();
