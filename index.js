const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

const asyncFunction = async () => {
  function func() {
    let i = 0;

    while (i < 10000000000) {
      i += 1;
    }
    return i; // This will immediately resolve the Promise with value i
  }

  console.log('resulting...')
  const res = func();
  console.log('result...', res)
}
 
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
asyncFunction();

console.log("end execution...")