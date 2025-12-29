/*
JavaScript (JS) Object Constructor
*/

function Student(name, age, country, company) {
  this["name"] = name;
  this["age"] = age;
  this["country"] = country;
  this["company"] = company;
  this["address"] = "221 High St";
}

const s1 = new Student("Behabtu Getnet", 24, "USA", "Apple");
const s2 = new Student("Kidest Anteneh", 10, "Ethiopia", "Dezlearn");

console.log(s1);
console.log(s2);
