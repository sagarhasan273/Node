let promise = new Promise((resolve) => {
  setTimeout(() => resolve('solved'), 1000);
})
.then((value) => console.log('Promise is '+ value))
.finally(() => {
  console.log(1/0)
  throw new Error("error");
}).catch(err => console.log(err))

console.log(promise);