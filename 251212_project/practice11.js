const cart = [
  { name: "Apple", price: 100, qty: 2 },
  { name: "Banana", price: 200, qty: 3 },
  { name: "Orange", price: 150, qty: 4 },
];

function findProduct(cart,productName) {
    const productMatch = cart.find(p => p.name === productName);
    if (!productMatch) {
        return null;
    } else {
        return productMatch;
    }
}

console.log(findProduct(cart,'Grape'));
