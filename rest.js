const [first, ...rest] = [1, 2, 3, 4];

console.log(first); // 1
console.log(rest);  // [2, 3, 4]


const person = {
  name: "Vaibhav",
  age: 25,
  city: "Pune"
};

const { name, ...otherInfo } = person;

console.log(name);       // Vaibhav
console.log(otherInfo);  // { age: 25, city: "Pune" }


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30)); // Output: 60
