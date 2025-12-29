//5. Using aync/await with Promises in Parallel
//you can run multiple promises concurrently using Promise.all inside an async function to imporve performance.
async function fetchData() {
  const [data1, data2] = await Promise.all([
    fetch("https://api.example.com/data1/"),
    fetch("https://api.example.com/data2/"),
  ]);
  console.log(data1, data2);
}
fetchData();

//This approach is more efficient than awaiting each promise sequentially,
//  especially when the promises are independent of each other.
//It reduces the total waiting time by executing the promises in parallel.
