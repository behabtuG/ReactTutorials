//8.Avoid Blocking the Event Loop with setImmediate
//Ensure that long-running tasks don’t block the , use to break tasks into smaller- chunks.
//The is the mechanism that allows Node.js to handle multiple operations, like I/O (file reads, HTTP requests, etc.),
//  without blocking the execution of other tasks. It’s one of the key reasons Node.js is so efficient and scalable
//  for handling asynchronous tasks.

setImmediate(() => {
  //Non-blocking code excution
  console.log("Excuted asynchronously without blocking the event loop");
});

//setImmediate() schedules the provided callback function to run in the next iteration of the event loop.
//The callback won’t execute immediately, but it ensures that it will be executed as soon as the current phase of the
//  event loop finishes (right after the I/O events). This makes it non-blocking because it won’t stop other operations
//  from executing while waiting for it to run.
