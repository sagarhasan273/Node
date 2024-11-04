const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});
console.log("promise before...")
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
console.log("promise after...")