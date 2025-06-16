const person = {name: 'Vaibhav'};

function greet(age){
    return  `Hello, my name is ${this.name} and I am ${age} years old.`;
}

console.log(greet.call(person, 25)); // Using call
console.log(greet.apply(person, [30])); // Using apply
console.log(greet.bind(person, 35)()); // Using bind