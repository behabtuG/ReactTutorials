// Dashen Problem Solution
function calculateC() {
  var a = 3,
    b = 5,
    c;

  while (a < 2 * b) {
    c = a * a;
    a = a + 1;
    b = b - 1;
  }

  return c;
}

var result = calculateC();
console.log(result); // Outputs the final value of c

/** if 3 < 2* 5 = true;
 * c = 3 * 3 = 9;
 * a = 3 + 1 = 4;
 * b = 5 - 1 = 4;
 *if 4 < 2 * 4 = true;
 * c = 4 * 4 = 12;
 * a = 4 + 1 = 5;
 * b = 4 -1 = 3;
 if 5 < 2 * 3 = true;
 * c = 5*5 =25;
 * a = 5 + 1 = 6;
 * b = 3 - 1 = 2;
 * if 6 < 2 * 2 = false
 * /// output = 9, 12, 25
 */
