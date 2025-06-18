const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }

const original = [10, 20];
const copy = [...original];
copy.push(30);

console.log(original); // [10, 20]
console.log(copy);     // [10, 20, 30]

