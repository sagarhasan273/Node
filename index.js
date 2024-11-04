const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

let i = 0;

while (i < 100000){
  console.log("promise before...");
  i += 1;
}

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})
console.log("promise after...")