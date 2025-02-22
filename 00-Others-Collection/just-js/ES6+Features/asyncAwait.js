async function asyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Async/Await function");
}

asyncFunction();
