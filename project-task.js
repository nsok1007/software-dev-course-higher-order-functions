/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability
Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

const filteredProducts = products.filter(produce => produce.price);
console.log("Product Prices:", filteredProducts);

/* OUTPUT
Product Prices: [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 800, inStock: true },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Keyboard', price: 100, inStock: false }
]
*/

const filteredProducts2 = products.filter(produce => produce.inStock);
console.log("Produce Availability:", filteredProducts2);

/* OUTPUT
Produce Availability: [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Tablet', price: 800, inStock: true },
  { name: 'Monitor', price: 300, inStock: true }
]
*/

/*
🔹 Task 2: Transform Product Names
Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

const productsUpperCase = products.map((capitalizationUpdate) => {
  return{
    ...capitalizationUpdate,
    name: capitalizationUpdate.name.toUpperCase(), 
  } 
});
console.log("All Produce Names Capitalized:", productsUpperCase);

/* OUTPUT
All Produce Names Capitalized: [
  { name: 'LAPTOP', price: 1000, inStock: true },
  { name: 'PHONE', price: 500, inStock: false },
  { name: 'TABLET', price: 800, inStock: true },
  { name: 'MONITOR', price: 300, inStock: true },
  { name: 'KEYBOARD', price: 100, inStock: false }
]
*/


/*🔹 Task 3: Generate Discounted Prices
Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/

function applyDiscount(discountPercent){
  return function(product){
      product.salePrice = product.price * ((100 - discountPercent)/100)
  }  
}
//const productsOnSale = products.map(applyDiscount(30))
products.forEach(applyDiscount(30))
console.log("New Sale Prices:", products);

/* OUTPUT
New Sale Prices: [
  { name: 'Laptop', price: 1000, inStock: true, salePrice: 700 },
  { name: 'Phone', price: 500, inStock: false, salePrice: 350 },
  { name: 'Tablet', price: 800, inStock: true, salePrice: 560 },
  { name: 'Monitor', price: 300, inStock: true, salePrice: 210 },
  { name: 'Keyboard', price: 100, inStock: false, salePrice: 70 }
]
*/

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

const totalValue = products.reduce(
  (sum, product) => sum + product.price * (product.inStock == true), //correct with this conditional logic – if (products.inStock = true)
  0
);
console.log("Total value in stock:", totalValue); //should be Total value in stock: 2100

//OUTPUT: Total value in stock: 2100

/*
- sum is the accumulator variable (acc) which stores the running total
- 0 is the initial value of the accumulator (why?)
- product is the current value/element variable (curr) being passed through
- think of acc like i++ in loop logic; curr as the final 'value' logged to the console

*/

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);
