function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
}

delay(3000)
.then(() => 'runs after 3 seconds')
.then((data) => console.log(data + 2));