new Promise((resolve) => {
  setTimeout(() => resolve('solved'), 2000);
})
.then((value) => console.log('Promise is '+ value))
.finally(() => console.log('promise is ready'))