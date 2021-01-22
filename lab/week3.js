// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

let numberOfProducts        // expects a Number
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript, use our
//   getRandomInt() function and pass it x (note that it's inclusive of both 0 and x).

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  numberOfProducts = database.products.length

  products = database.products
  
  // Promotion #1
  promotionIndex = getRandomInt(database.promotions.length) - 1
  let promotion1 = database.promotions[promotionIndex]
  
  // Assign description for promotion #1
  promotion1Description = promotion1.description
  
  // Assign emoji for promotion #1
  if (promotion1.type == 'shipping') {
    promotion1Icon = '🚛'
  } else if (promotion1.type == 'discount') {
    promotion1Icon = '🤑'
  } else if (promotion1.type == 'contest') {
    promotion1Icon = '🎰'
  } else {
    console.log(`Error! Promotion type not defined!`)
  }

  // Promotion #2
  promotionIndex = getRandomInt(database.promotions.length) - 1
  let promotion2 = database.promotions[promotionIndex]
  
  // Assign description for promotion #2
  promotion2Description = promotion2.description

  // Assign emoji for promotion #2
  if (promotion2.type == 'shipping') {
    promotion2Icon = '🚛'
  } else if (promotion2.type == 'discount') {
    promotion2Icon = '🤑'
  } else if (promotion2.type == 'contest') {
    promotion2Icon = '🎰'
  } else {
    console.log(`Error! Promotion type not defined!`)
  }
  
  // Promotion #3
  promotionIndex = getRandomInt(database.promotions.length) - 1
  let promotion3 = database.promotions[promotionIndex]

  // Assign description for promotion #3
  promotion3Description = promotion3.description
  
  // Assign emoji for promotion #3
  if (promotion3.type == 'shipping') {
    promotion3Icon = '🚛'
  } else if (promotion3.type == 'discount') {
    promotion3Icon = '🤑'
  } else if (promotion3.type == 'contest') {
    promotion3Icon = '🎰'
  } else {
    console.log(`Error! Promotion type not defined!`)
  }

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}