const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      let i = 0;
      while (i < 10000000000) {
        i += 1;
      }
      resolve("Operation successful!");
    } else {
      reject("Operation failed.");
    }
  });
  
  const asyncFunction = async (n) => {
    function func(n) {
      let i = 0;
  
        while (i < n) {
          i += 1;
        }
        return i;
    }

    console.log('resulting 1...')
    const res1 = func(n);
    console.log('result1...', res1)
    console.log('resulting 2...')
    const res2 = func(n);
    console.log('result2...', res2)
    console.log('resulting 3...')
    const res3 = func(n);
    console.log('result 3...', res3)
    console.log('resulting...')
    const res = func(n);
    console.log('result...', res)
  }
  
  asyncFunction(10000000000);
  
//   promise.then((data) => {
//     console.log(data);
//   }).catch((error) => {
//     console.log(error);
//   }).finally(() => {console.log('finally result...')});
  
  console.log("done execution...")