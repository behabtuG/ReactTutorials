//simplfy asynchronous code with async/await instead of nested callbacks or .then()/.catch() chains.
// it's more readable and reduces the callback hell.

//Instead of this

someAsyncFunction()
  .then((result) => {
    return anotherAsyncFunction(result);
  })
  .then((finalResult) => {
    console.log(anotherResult);
  })
  .catch((error) => {
    console.error(error);
  });

// Do this
async function run() {
  try {
    const result = await someAsyncFunction();
    const finalResult = await anotherAsyncFunction(result);
    console.log(finalResult);
  } catch (error) {
    console.error(error);
  }
}
run();
