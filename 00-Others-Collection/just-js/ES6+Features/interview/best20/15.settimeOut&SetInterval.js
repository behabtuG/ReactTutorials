//15.SetTimeout & SetInterval
//setTimeout delays execution, while setInterval repeats it.
setTimeout(() => console.log("After 1 second"), 1000);
let count = 0;
const intervalId = setInterval(() => {
  console.log("Count:", ++count);
  if (count === 3) clearInterval(intervalId);
}, 1000);
