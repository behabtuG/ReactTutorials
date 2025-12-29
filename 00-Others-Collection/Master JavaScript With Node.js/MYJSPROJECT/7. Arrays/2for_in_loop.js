/*
For..in loop on Object Properties
*/

let periodicTable = {
  H: "Hydrogen",
  He: "Helium",
  Li: "Lithium",
  Be: "Beryllium",
  B: "Boron",
  C: "Carbon",
  N: "Nitrogen",
  O: "Oxygen",
};

for (const key in periodicTable) {
  //console.log(key);
  console.log(periodicTable[key]);
}
//Hydrogen;
// Helium;
// Lithium;
// Beryllium;
// Boron;
// Carbon;
//  Nitrogen;
// Oxygen;
