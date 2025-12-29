/**
 * Create an object ‘employee’ in JS with below mentioned property values. Update salary by 10% if yearsOfExperience
 * is greater than 4 years.
 * 1. Name : “Swapnil”
 * 2. educationalQualification : “Computer Engineering”
 * 3. yearsOfExperience : 5
 * 4. salary : 50000
 */

let employee = {
  name: "Swapnil",
  educationalQualification: "Computer Engineering",
  yearsOfExperience: 5,
  salary: 50000,
};

// Check if yearsOfExperience is greater than 4
if (employee.yearsOfExperience > 4) {
  // Update salary by 10%
  employee.salary *= 1.1; // Increase salary by 10%
}

console.log(employee);
