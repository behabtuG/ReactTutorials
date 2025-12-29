/**
 * 3. Create an object ‘hosp’ in JS with a function definition as a property.  Pass values to this function to update
 *  object property values using ‘this’ keyword. Refer this object :
 * 1.name
 * 2.city
 * 3. displayHospitalDetails(hospName, hospCity)  // hostName & hospCity will be passed to this function from outside
 *  of an object to update ‘name’ & ‘city’ using ‘this’ keyword.
 *
 */
let hosp = {
  name: "",
  city: "",
  displayHospitalDetails: function (hospName, hospCity) {
    this.name = hospName;
    this.city = hospCity;
    console.log("Hospital details updated.");
  },
};

// Example usage: passing values to the function to update object property values
hosp.displayHospitalDetails("XYZ Hospital", "New York");

console.log(hosp);
