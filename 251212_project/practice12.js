const cart = [
  { name: "Banana", price: 200, qty: 3 },
  { name: "Orange", price: 150, qty: 4 },
  { name: "Apple", price: 100, qty: 2 },
];

function sortByPrice(cart) {
    cart.sort((a,b) => a.price - b.price);
    return cart;
}
console.log(sortByPrice(cart));