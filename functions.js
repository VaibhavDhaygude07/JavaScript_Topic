//Regular function
function AvgValue(num1, num2){
   
    console.log ((num1+ num2)/2);
}
AvgValue(10, 20); //outpuut: 15

//Arrow function
let add =(num1, num2) => num1+num2;
console.log(add(10,20)); //output: 30

//noName function
let addValue = function(num1, num2){
    return num1+num2;
}


