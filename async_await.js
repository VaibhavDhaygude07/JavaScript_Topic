
function wait2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, 2000);
  });
}

async function demo() {
  console.log("Waiting...");
  let message = await wait2Seconds();
  console.log(message); // "Done waiting!" after 2 seconds
}

demo();


function orderFood() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Pizza delivered ");
    }, 3000); // 3 seconds
  });
}

async function eatFood() {
  console.log("Waiting for food...");
  const food = await orderFood(); // wait for 3 seconds
  console.log(food); 
}

eatFood();



