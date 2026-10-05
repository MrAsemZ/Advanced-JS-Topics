// ========================================
// Exercise 7 — Arrow Function Transformation
// ========================================


// ========================================
// 1. Square of a number
// ========================================

// Traditional function:
//
// function square(number) {
//     return number * number;
// }


// Arrow function:

var square = (number) => {
    return number * number;
};

console.log("Square of 5:");
console.log(square(5)); // 25



// ========================================
// 2. Check if a number is even
// ========================================

// Traditional function:
//
// function isEven(number) {
//     return number % 2 === 0;
// }


// Arrow function:

var isEven = (number) => {
    return number % 2 === 0;
};

console.log("Is 10 even?");
console.log(isEven(10)); // true

console.log("Is 7 even?");
console.log(isEven(7)); // false



// ========================================
// 3. Create products
// ========================================

var products = [

    {
        name: "Laptop",
        price: 800
    },

    {
        name: "Phone",
        price: 500
    },

    {
        name: "Keyboard",
        price: 50
    },

    {
        name: "Mouse",
        price: 30
    },

    {
        name: "Monitor",
        price: 300
    }

];


// ========================================
// 4. Use map()
// ========================================

// map() creates a NEW array.
//
// Here we use map() to get
// only the product prices.

var prices = products.map((product) => {
    return product.price;
});

console.log("Product prices:");
console.log(prices);


// Result:
//
// [800, 500, 50, 30, 300]



// ========================================
// 5. Use filter()
// ========================================

// filter() creates a NEW array
// containing only items that
// pass the condition.
//
// Here we get products
// that cost more than 300.

var expensiveProducts = products.filter((product) => {
    return product.price > 300;
});

console.log("Products over 300:");
console.log(expensiveProducts);


// Result:
//
// Laptop
// Phone



// ========================================
// 6. Use reduce()
// ========================================

// reduce() combines all values
// into one final value.
//
// Here we calculate the
// total price of all products.

var totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total price:");
console.log(totalPrice);


// Result:
//
// 1680