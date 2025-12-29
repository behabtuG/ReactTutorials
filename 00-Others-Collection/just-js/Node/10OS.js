//10.Use Module to Get System Informationos
//Quickly access system information such as available CPUs, memory, and platform
const os = require("os");
console.log("CPU architecture:", os.arch()); // e.g., 'x64'
console.log("Free memory:", os.freemem()); // in bytes
