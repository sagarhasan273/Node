const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

const asyncFunction = async () => {
  function func(n) {
    let i = 0;

      while (i < n) {
        i += 1;
      }
      return i; // This will immediately resolve the Promise with value i
  }

  console.log('resulting1...')
  const res1 = func(10000000000);
  console.log('result1...', res1)
  console.log('resulting2...')
  const res2 = func(10000000000);
  console.log('result2...', res2)
  console.log('resulting...')
  const res = func(10000000000);
  console.log('result...', res)
}
 
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
}).finally(() => {console.log('finally result...')});

asyncFunction();

console.log("end execution...")