/**
 *
 * Create two JS objects by defining a function named as getEmployeeInfo that accepts arguments such as
 * employeeName, salary, department.
 */

function getEmployeeInfo(employeeName, salary, department) {
  return {
    employeeName: employeeName,
    salary: salary,
    department: department,
  };
}
const employee1 = getEmployeeInfo(
  "Behabtu Getnet",
  500000,
  "Technology Developer"
);
const employee2 = getEmployeeInfo("Kidest Anteneh", 60000, "Accountant");

console.log(employee1);
console.log(employee2);
