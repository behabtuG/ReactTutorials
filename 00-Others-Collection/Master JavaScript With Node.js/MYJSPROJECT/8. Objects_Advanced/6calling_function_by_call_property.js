/*
Calling a Function by fun.call()
*/

let account = {
  name: "Behabtu",
  number: 1234,
  amount: 100,
  addAmt: function (amt) {
    this.amount += amt;
  },
};

let accountMananger = {
  name: "Kidest",
  managingAccountFor: account.name,
  addAmt: account.addAmt,
};

// account.addAmt();
// console.log(account);
// accountMananger.addAmt();
// console.log(accountMananger);
accountMananger.addAmt.call(account, 500);

console.log(account);
console.log(accountMananger);
