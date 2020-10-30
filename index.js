var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const newItem = {
  itemName: item,
  itemPrice: Math.floor(Math.random() * 100)
  }
  getCart().push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  const cart = getCart()
  let str = "In your cart, you have"
  if (cart.length <= 0){
    return `Your shopping cart is empty.`
  }

  if (cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  if (cart.length == 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }

  if (cart.length > 2){
    for (let i = 0; i < cart.length-1; i ++){
      str  += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    str += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return str
  }
}

function total() {
  // write your code here
  let totalValue = 0
  cart.forEach(i => totalValue += i.itemPrice)
  return totalValue

}

function removeFromCart(item) {
  // write your code here
  if (cart.find(i => i.itemName == item)){
    const obj = cart.find(i => i.itemName == item)
    cart.splice(cart.indexOf(obj), 1)
    setCart(cart)
  }
  else{
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let cartTotal = total()
    setCart([])
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
