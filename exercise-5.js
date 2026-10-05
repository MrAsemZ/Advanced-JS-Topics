// ========================================
// Exercise 5 — JSON Converter
// ========================================


// ========================================
// 1. Create a JavaScript object
// ========================================

var product = {

    id: 1,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    available: true

};


// ========================================
// 2. Display the original object
// ========================================

console.log("Original JavaScript object:");
console.log(product);


// ========================================
// 3. Convert object to JSON string
// ========================================

// JSON.stringify()
// converts a JavaScript object
// into a JSON string.

var jsonProduct = JSON.stringify(product);

console.log("JSON string:");
console.log(jsonProduct);


// ========================================
// 4. Convert JSON back to an object
// ========================================

// JSON.parse()
// converts a JSON string
// back into a JavaScript object.

var convertedProduct = JSON.parse(jsonProduct);

console.log("Converted JavaScript object:");
console.log(convertedProduct);


// ========================================
// 5. Display values from the converted object
// ========================================

console.log(convertedProduct.name);
console.log(convertedProduct.price);
console.log(convertedProduct.category);


// ========================================
// 6. Handle invalid JSON
// ========================================

// This JSON is invalid because
// the property value is missing.

var invalidJSON = '{"name": "Laptop", "price": }';


try {

    // JavaScript will try to convert
    // the invalid JSON into an object.

    var result = JSON.parse(invalidJSON);

    console.log(result);

}
catch (error) {

    // If JSON.parse() fails,
    // the catch block runs.

    console.log("Invalid JSON!");
    console.log(error.message);

}