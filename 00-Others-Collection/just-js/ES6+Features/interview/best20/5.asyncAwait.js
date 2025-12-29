//5.Async/Await : simplifies promise handling
async function fetchData() {
  let data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data"), 1000)
  );
  console.log(data);
}

fetchData(); //Data
