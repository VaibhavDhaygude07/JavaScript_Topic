// A function that remembers and keeps access to variables from its outer function, 
// even after the outer function has finished executing.

function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const count = outer();
count(); // 1
count(); // 2
