/**
 *Define a constructor function named as Country that accepts arguments such as
 *countryName, population & currency. Invoke this constructor function using ‘new’ keyword.
 */
function Country(countryName, population, currency) {
  this.countryName = countryName;
  this.population = population;
  this.currency = currency;
}

const country0 = new Country("Ethiopia", 150000000, "BIRR");
const country1 = new Country("United States", 331000000, "USD");
const country2 = new Country("India", 1380000000, "INR");

console.log("Country 0:", country0);
console.log("Country 1:", country1);
console.log("Country 1:", country1);
console.log("Country 2:", country2);
