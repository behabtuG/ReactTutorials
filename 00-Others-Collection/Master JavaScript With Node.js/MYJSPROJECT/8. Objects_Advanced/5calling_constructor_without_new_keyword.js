/*
Calling a constructor function without 'new' keyword
Significance of 'new.target'
*/

function AppleDevice(deviceName, deviceOS) {
  // console.log(new.target);
  if (!new.target) {
    return `Get an ${deviceName} with ${deviceOS}`;
  }
  this.deviceName = deviceName;
  this.deviceOS = deviceOS;
}

const device1 = AppleDevice("iPhone13", "iOS14");
const device2 = new AppleDevice("iPhone14", "iOS16");

console.log(device1);
console.log(device2);
