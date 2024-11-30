let promise = new Promise((resolve) => {
  resolve('solved');
})
.then((value) => console.log('Promise is '+ value))
.catch(err => console.log(err))

console.log(promise);