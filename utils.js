// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  if (w <= 0 || h <= 0 || typeof w !== "number" || typeof h !== "number") {
    return null
  }
  return w * h
}

const perimeter = (w, h) => {
  if (w <= 0 || h <= 0 || typeof w !== "number" || typeof h !== "number") {
    return null
  }
  return 2 * (w + h)
}

const circleArea = r => {
  if (r <= 0 || typeof r !== "number") {
    return null
  }
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1, cost: price }
}

const getShoppingCart = () => {
  return shoppingCart
}

const getCartTotal = () => {
  const total = { totalItems: 0, totalCost: 0 }
  shoppingCart.forEach(item => {
    total.totalItems += item.quantity
    total.totalCost += item.cost
  })
  return total
}

const addItemToCart = (item) => {
  if (shoppingCart.length === 0 || !shoppingCart.includes(item)) {
    shoppingCart.push(item)
  } else
  if (shoppingCart.includes(item)) {
    item.quantity += 1
    item.cost += item.price
  }
}

const getNumItemsInCart = () => {
  totalItems = 0
  shoppingCart.forEach(item => {
    totalItems += item.quantity
  })
  return totalItems;
}

const removeItemFromCart = (item) => {
  if (shoppingCart.length === 0 || !shoppingCart.includes(item)) {
    return null
  } else
  if (shoppingCart.includes(item) && item.quantity === 1) {
    shoppingCart.splice(shoppingCart.indexOf(item), 1)
  } else
  if (shoppingCart.includes(item) && item.quantity > 1) {
    item.quantity -= 1
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getCartTotal
}
