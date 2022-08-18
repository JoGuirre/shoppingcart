let sumTotal = 0;
const products = [
  {
    name : 'Cherry',
    price : 5.00,
    quantity : 0,
    productId : 1000,
    image : 'images/cherry.jpg',
  },

  {
    name : 'Orange',
    price : 5.00,
    quantity : 0,
    productId : 1001,
    image : 'images/orange.jpg',
  },
  
  {
    name : 'Strawberry',
    price : 5.00,
    quantity : 0,
    productId : 1002,
    image : 'images/strawberry.jpg',
  }
];

let cart = [];

/* Declare an empty array named cart to hold the items in the cart */
function addProductToCart(pId) {
  if (pId === products[0].productId) {
    if (cart.includes(products[0])) {
      products[0].quantity += 1;
    } else {
      cart.push(products[0]);
      products[0].quantity += 1;
    }
  }
  else if (pId === products[1].productId) {
    if (cart.includes(products[1])) {
      products[1].quantity += 1;
    } else {
      cart.push(products[1]);
      products[1].quantity += 1;
    }
  }
  else if (pId === products[2].productId) {
    if (cart.includes(products[2])) {
      products[2].quantity += 1;
    } else {
      cart.push(products[2]);
      products[2].quantity += 1;
    }
  }
};
  /* Create a function named addProductToCart that takes in the product productId as an argument
    - addProductToCart should get the correct product based on the productId
    - addProductToCart should then increase the product's quantity
    - if the product is not already in the cart, add it to the cart
  */
function increaseQuantity(pId) {
  if (pId === products[0].productId) {
    products[0].quantity += 1;
  }
  else if (pId === products[1].productId) {
    products[1].quantity += 1;
  }
  else if (pId === products[2].productId) {
    products[2].quantity += 1;
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function decreaseQuantity(pId) {
  if ((pId === products[0].productId) && (products[0].quantity > 0)) {
    products[0].quantity -= 1;
    sumTotal -= products[0].price;
    for (let i=0;i<cart.length;i++) {
      if (cart[i].quantity === 0) {
        cart.splice(i,1);
      }
    }
  }
  else if ((pId === products[1].productId) && (products[1].quantity > 0)) {
    products[1].quantity -= 1;
    sumTotal -= products[1].price;
    for (let i=0;i<cart.length;i++) {
      if (cart[i].quantity === 0) {
        cart.splice(i,1);
      }
    }
  }
  else if ((pId === products[2].productId) && (products[2].quantity > 0)) {
    products[2].quantity -= 1;
    sumTotal -= products[2].price;
    for (let i=0;i<cart.length;i++) {
      if (cart[i].quantity === 0) {
        cart.splice(i,1);
      }
    }
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function removeProductFromCart(pId) {
  if (pId === products[0].productId) {
    for (let i=0;i<cart.length;i++) {
      if (cart[i] === products[0]) {
        cart.splice(i,1);
        sumTotal -= (products[0].price * products[0].quantity);
      }
    }
    products[0].quantity = 0;
  }
  else if (pId === products[1].productId) {
    for (let i=0;i<cart.length;i++) {
      if (cart[i] === products[1]) {
        cart.splice(i,1);
        sumTotal -= (products[1].price * products[1].quantity);
      }
    }
    products[1].quantity = 0;
  }
  else if (pId === products[2].productId) {
    for (let i=0;i<cart.length;i++) {
      if (cart[i] === products[2]) {
        cart.splice(i,1);
        sumTotal -= (products[2].price * products[2].quantity);
      }
    }
    products[2].quantity = 0;
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function cartTotal() {
  for (let i=0;i<cart.length;i++) {
    sumTotal += cart[i].price;
    return sumTotal;
  }
  return sumTotal;
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function emptyCart() {
  cart = [];
}

/* Create a function called emptyCart that empties the products from the cart */
function pay(amt) {
  let balance = amt - sumTotal;
  return balance;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
