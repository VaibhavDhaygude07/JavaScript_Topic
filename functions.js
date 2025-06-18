//Regular function
function AvgValue(num1, num2){
   
    console.log ((num1+ num2)/2);
}
AvgValue(10, 20); //outpuut: 15

//Arrow function
let add =(num1, num2) => num1+num2;
console.log(add(10,20)); //output: 30

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6]



const square = x => x * x;

console.log(square(4)); // Output: 16


//noName function
let addValue = function(num1, num2){
    return num1+num2;
}

// Function Declaration
function calculateArea(length, width) {
 
  const area = length * width;
  return area;
}

// Function Call
let result1 = calculateArea(5, 10);
let result2 = calculateArea(7, 4);

// Output the result
console.log("Area of 5 x 10 = " + result1); // Output: 50
console.log("Area of 7 x 4 = " + result2);   // Output: 28

