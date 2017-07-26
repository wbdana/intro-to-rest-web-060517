something = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // resolve('sarah')
    reject('sarah')
  }, 1000)
})

something.then(function resolve(name){
  console.log("I'm the first successful")
  console.log(name)
  throw new Error('I did not work')
  return 'Hello, ' + name;
}).catch(function(err) {
  console.log(err)
}).then(function(val) {
  console.log("I'm the second successful")
  console.log(val)
})

// Can you throw an error with a blank string ''
// and then in the .catch method, just use a return;
// to exit without throwing any actual errors?
