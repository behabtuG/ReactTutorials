/*
Creating a JS object using function
*/

function createStudent(name, age, country, company) {
  const student = {};
  student["name"] = name;
  student["age"] = age;
  student["country"] = country;
  student["company"] = company;
  return student;
}

const s1 = createStudent("Behabtu Getnet", 24, "Ethiopia", "AdEthiopia");
const s2 = createStudent("Kidest Anteneh", 10, "Addis Ababa", "Financeail");

console.log(s1);
console.log(s2);

/**
 {
  name: 'Behabtu Getnet',
  age: 24,
  country: 'Ethiopia',
  company: 'AdEthiopia'
}
{
  name: 'Kidest Anteneh',
  age: 10,
  country: 'Addis Ababa',
  company: 'Financeail'
} 
*/
