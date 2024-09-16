const myArray = [11, 20, 13, 10, 5, 30];
console.log(myArray);

// const myArray1 = new Array(5);
// console.log(myArray1);

// const myArray2 = new Array(1, 2, 3);
// console.log(myArray2);

// console.log(myArray.push(5))
// console.log(myArray);

// console.log(myArray.pop())
// console.log(myArray);

// console.log(myArray.shift())
// console.log(myArray);

// console.log(myArray.unshift(1))
// console.log(myArray);

// console.log(myArray.sort((a, b) => { return a - b }));
// console.log(myArray);

// sorting an array of objects

// const users = [
//     { name: 'aagar', age: 24 },
//     { name: 'Aarveen', age: 33 },
//     { name: 'aasan', age: 32 },
// ]

// console.log(users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));

// let fruits = ['aanana', 'bpple', 'aherry'];
// console.log(fruits.sort((a, b) => a.localeCompare(b)));

// let string1 = 'apple';
// let string2 = 'Apple';

// console.log(string1.localeCompare(string2));
// console.log(string1.localeCompare(string2, 'en', { sensitivity: 'accent' }))

// console.log(myArray.reverse());

// console.log(myArray.shift())
// console.log(myArray);

// console.log([].shift());

// console.log(myArray.unshift(-1, 0))
// console.log(myArray)

// let deeplyNestedArray = [1, [2, [3, [4, [5]]]]]
// let fullyFlatArray = deeplyNestedArray.flat(Infinity);
// console.log(fullyFlatArray);

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let removedFruits = fruits.splice(2, 2);
