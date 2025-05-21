let promise = new Promise(function(resolve, reject) {
    let isSuccess = true;
    
    if (isSuccess) {
        resolve(" Task completed!");
    } else {
        reject(" Task failed!");
    }
});

promise
  .then(function(result) {
      console.log(result); // If success
  })
  .catch(function(error) {
      console.log(error); // If failure
  });
