const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("Should return the area of a rectangle", function() {
  const area = utils.area(5, 10)
  expect(area).to.be.a("number")
  expect(area).to.equal(50)
})

it("Should return the perimeter of a rectangle", function() {
  const perimeter = utils.perimeter(5, 10)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(30)
})

it("Should return the area of a circle", function() {
  const area = utils.circleArea(5)
  expect(area).to.be.a("number")
  expect(area).to.equal(78.53981633974483)
})

it("Should return nil if the number is negative", function() {
  const area = utils.circleArea(-5)
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

it("Should return nil if the supplied lengths are negative", function() {
  const area = utils.area(-5, -10)
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

it("Should return nil if the supplied lengths are negative", function() {
  const perimeter = utils.perimeter(-5, -10)
  expect(perimeter).to.be.a("null")
  expect(perimeter).to.equal(null)
})

it("Should return nil if the supplied lengths are not numbers", function() {
  const area = utils.area("5", "10")
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

it("Should return nil if the supplied lengths are not numbers", function() {
  const perimeter = utils.perimeter("5", "10")
  expect(perimeter).to.be.a("null")
  expect(perimeter).to.equal(null)
})

it("Should return nil if the radius is not a number", function() {
  const area = utils.circleArea("5")
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

it("Should return nil if the supplied lengths are 0", function() {
  const area = utils.area(0, 0)
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

it("Should return nil if the supplied lengths are 0", function() {
  const perimeter = utils.perimeter(0, 0)
  expect(perimeter).to.be.a("null")
  expect(perimeter).to.equal(null)
})

it("Should return nil if the radius is 0", function() {
  const area = utils.circleArea(0)
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 0.79)
  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart).to.have.lengthOf(2)
  
  expect(cart[0]).to.have.property("name", "apple")
  expect(cart[0]).to.have.property("price", 0.99)
  expect(cart[0]).to.have.property("quantity", 1)
  expect(cart[1]).to.have.property("name", "banana")
  expect(cart[1]).to.have.property("price", 0.79)
  expect(cart[1]).to.have.property("quantity", 1)
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart[0]).to.have.property("name", "apple")
  expect(cart[0]).to.have.property("price", 0.99)
  expect(cart[0]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 0.79)
  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  const num = utils.getNumItemsInCart()
  expect(num).to.be.a("number")
  expect(num).to.equal(2)
})

it("Should remove items from cart", function() {
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 0.79)
  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  utils.removeItemFromCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart).to.have.lengthOf(1)
  expect(cart[0]).to.have.property("name", "banana")
  expect(cart[0]).to.have.property("price", 0.79)
  expect(cart[0]).to.have.property("quantity", 1)
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart when pre-existing items are added or removed", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  utils.addItemToCart(item)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart).to.have.lengthOf(1)
  expect(cart[0]).to.have.property("quantity", 3)
  utils.removeItemFromCart(item)
  expect(cart[0]).to.have.property("quantity", 2)
})

it("Should validate that an empty cart has 0 items", function() {
  const num = utils.getNumItemsInCart()
  expect(num).to.be.a("number")
  expect(num).to.equal(0)
})

it("Should update the count of items in the cart when a new item is added", function() {
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 0.79)
  const currentCount = utils.getNumItemsInCart()
  utils.addItemToCart(item)
  expect(utils.getNumItemsInCart()).to.equal(currentCount + 1)
})
 
it("Should return the total cost of all items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  const item2 = utils.createItem("banana", 0.79)
  utils.addItemToCart(item)
  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  const total = utils.getCartTotal()
  expect(total).to.be.a("object")
  expect(total).to.have.property("totalCost", 2.77)
  expect(total).to.have.property("totalItems", 3)
})
