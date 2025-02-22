/**
 * Create an object ‘pfAccount’ with properties name, number, accBalance & addBalance function to increase
 *balance by 2000. Create another object named as Employee with properties name, managingPfAccountFor,
 *addBalance. Use ‘call()’ to pass object reference of ‘pfAccount’
 *
 */

// Create pfAccount object
let pfAccount = {
  name: "Behabtu",
  number: "123456789",
  accBalance: 5000,
  addBalance: function (amount) {
    this.accBalance += amount;
    console.log(`Balance added: ${amount}. New balance: ${this.accBalance}`);
  },
};

// Create Employee object
let Employee = {
  name: "Kidest Anteneh",
  managingPfAccountFor: pfAccount.name,
  addBalance: function () {
    pfAccount.addBalance.call(pfAccount, 2000);
  },
};

// Use call() to pass object reference of pfAccount to Employee
Employee.managingPfAccountFor = pfAccount;

// Add balance using Employee object
Employee.addBalance();
