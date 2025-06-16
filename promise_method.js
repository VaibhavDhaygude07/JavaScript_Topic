//  1. Promise.resolve
Promise.resolve("Success").then(console.log); // Output: Success

//  2. Promise.reject
Promise.reject("Error").catch(console.log); // Output: Error

// 3. Promise.all([...])
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(console.log); // [1, 2]


// 4. Promise.any([...])
Promise.any([
  Promise.reject("fail"),
  Promise.resolve("First Success")
]).then(console.log); // Output: "First Success"
