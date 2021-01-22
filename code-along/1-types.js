// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

let firstName = 'Dave'
let greeting = "Hello, " + firstName
console.log(greeting)

let dinner = 'tacos'
let quantity = 5
let hasGuac = true

let output
// output = 
// output = 'Ordering ' + quantity + ' ' + dinner + ' tonight!'
output = `Ordering ${quantity} ${dinner} tonight!`

//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output