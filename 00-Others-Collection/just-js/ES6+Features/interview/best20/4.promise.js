//4.Promises
//promises handle async operations, with states:pending, fulfilled, and rejected
async function fetchData() {
  let data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data"), 1000)
  );
  console.log(data);
}

fetchData(); //Data
