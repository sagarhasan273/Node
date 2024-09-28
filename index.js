let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};

let clone = Object.assign({}, user);

user.name = 'Sagar';
console.log(clone.name);

user.sizes.height = 4;
console.log(clone.sizes.height);

console.log( user.sizes === clone.sizes ); // Output: true
console.log( user.sizes == clone.sizes );  // Output: true
console.log(user === clone); // Output: false
console.log(user == clone); // Output: false