interface Warehouse {
    name : string;
    price : number;
    inStock : boolean;
};


const warehouse: Warehouse[] = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 600, inStock: false },
  { name: "Phone", price: 800, inStock: true },
  { name: "Keyboard", price: 150, inStock: true },
];

// const filteredItems: Warehouse[] = warehouse.filter((item) => (item.price>500) && item.inStock);
// const sortedByDiscount: Warehouse[] = [...filteredItems].sort((a,b) => { return a.price - b.price});

// //.sort actually mutates the original array, so use the spread method to make a shallow copy to get different results, if you want.
// // .filter makes another array, which is new type. 
// console.log(filteredItems); 
// console.log(sortedByDiscount);

const result: Warehouse[] = warehouse
    .filter(item => (item.price>500) && item.inStock)
    .sort((a,b) => a.price-b.price);

console.log(result);


export {};