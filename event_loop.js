console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");


//stack memory
let a;
a =10;

//heap memory
let b = {name: "John",age: 30};