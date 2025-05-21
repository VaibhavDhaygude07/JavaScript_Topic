//A callback function is a function passed as an argument to another function,
//  which is then invoked (called back) inside that function.


function greet(name, callback) {
    console.log("Hello "+name);
    callback();
}


function sayGoodMorning() {
    console.log("GoodMorning");
}
console.log(greet("Rohit", sayGoodMorning));