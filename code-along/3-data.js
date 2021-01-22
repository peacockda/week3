// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥


let profile = {
  name: 'Brian',
  location: { city: 'Chicago', state: 'Illinois' },
  timeline: [
    { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
    { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
    { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
  ]
}

// let dan = {
//   name: 'Daniel',
//   location: 'Chicago',
//   status: 'Learning KIEI-451'
// }

// let gia = {
//   name: 'Giovanna',
//   location: 'Chicago',
//   status: 'Studying for driving test'
// }

// console.log(`Current status: ${dan.status}`)
// console.log(`Current status: ${gia.status}`)

// let shoppingList = [
//   `eggs`,
//   `orange juice`,
//   `ice cream`
// ]
// shoppingList.push(`lotto`)
// console.log(shoppingList)

// let lotteryTicket = [
//   4,
//   8,
//   15,
//   16,
//   23,
//   42
// ]
// console.log(lotteryTicket)

// let arizPeacocks = [
//   dan,
//   gia
// ]

// console.log(arizPeacocks)

//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

// template literals support HTML too!
output = `
  <div class="text-4xl">At ${profile.timeline[0].when}: ${profile.timeline[0].icon} ${profile.timeline[0].what}</div>
`
/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output