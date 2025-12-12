const cart = [
  { name: "Apple", price: 100, qty: 2 }, 
  { name: "Banana", price: 200, qty: 3 }, 
  { name: "Orange", price: 150, qty: 4 }
];

// function calculateTotal(cart) {
//     let total = 0;
//     for (let i = 0 ; i<cart.length; i++) {
//         total += (cart[i].price)*(cart[i].qty)
//     }
//     return total;
// }

function calculateTotal(cart) {
    return cart.reduce((acc,item) => acc + (item.price*item.qty),0);
}
console.log(calculateTotal(cart));