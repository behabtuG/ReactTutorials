//3. Event Loop & Callbakcs
//js is single-threaded, and the event loop allows asynchronous operations using callbacks.
console.log("Start");
setTimeout(() => console.log("Async operation"), 1000);
console.log("End");

//output: Start, End, Async operation
