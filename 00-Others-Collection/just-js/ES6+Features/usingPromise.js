let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

myPromise.then((result) => {
  console.log(result); //? ouptput:"success" after 2 seconds
});
