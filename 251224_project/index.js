const warehouse = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 600, inStock: false },
  { name: "Phone", price: 800, inStock: true },
  { name: "Keyboard", price: 150, inStock: true },
];


const Result = warehouse
  .filter((item) => (item.price > 500) & item.inStock)
  .map((item) => `${item.name} - $${item.price}`);
  
console.log(Result);