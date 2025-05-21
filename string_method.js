let string = "Good Morning";

//string length
let length = string.length;
console.log(length); // 12

let uppercase = string.toUpperCase()
console.log(uppercase)

let lowercase = string.toLowerCase()
console.log(lowercase)

//charAt display the character at the specified index
console.log(string.charAt(0)); // G

let index = string.indexOf("Good")
console.log(index)

let slice = string.slice(0,4); // slice the string from index 0 to 4
console.log(slice); 

let split = string.split(" "); // split the string into an array of words
console.log(split); // ["Good", "Morning"]

let replace = string.replace("Morning", "Afternoon"); // replace "morining" with "afternoon"
console.log(replace); // Good Afternoon