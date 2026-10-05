// ========================================
// Exercise 13 — Web Storage Methods
// ========================================


// Get the HTML element where we will
// display the storage contents.

var storageDiv = document.getElementById("storage");


// ========================================
// 1. setItem()
// ========================================

// setItem() saves data in localStorage.
//
// Syntax:
//
// localStorage.setItem("key", "value");

function saveData() {

    localStorage.setItem("name", "Ahmad");
    localStorage.setItem("age", "25");
    localStorage.setItem("course", "JavaScript");

    displayStorage();
}


// ========================================
// 2. getItem()
// ========================================

// getItem() retrieves a value
// using its key.
//
// Syntax:
//
// localStorage.getItem("key");

function getData() {

    var name = localStorage.getItem("name");

    console.log("Name:");
    console.log(name);

    displayStorage();
}


// ========================================
// 3. removeItem()
// ========================================

// removeItem() deletes ONE item.
//
// Here we remove the "name" item.

function removeData() {

    localStorage.removeItem("name");

    displayStorage();
}


// ========================================
// 4. clear()
// ========================================

// clear() removes ALL items
// from localStorage for this website.
//
// WARNING:
// It removes everything stored by
// this website in localStorage.

function clearData() {

    localStorage.clear();

    displayStorage();
}


// ========================================
// 5. key(index)
// ========================================

// key() gets the key at a specific position.
//
// Example:
//
// localStorage.key(0)
//
// gets the first stored key.

function getKey() {

    var firstKey = localStorage.key(0);

    console.log("First key:");
    console.log(firstKey);

    displayStorage();
}


// ========================================
// 6. length
// ========================================

// length tells us how many items
// are currently stored.

function displayStorage() {

    storageDiv.innerHTML = "";

    console.log("Number of stored items:");
    console.log(localStorage.length);


    // Display the number of items
    // in the browser.

    storageDiv.innerHTML +=
        "<p>Number of items: " +
        localStorage.length +
        "</p>";


    // ========================================
    // Display every stored item
    // ========================================

    for (var i = 0; i < localStorage.length; i++) {

        // Get the key at this position.

        var key = localStorage.key(i);

        // Get the value using the key.

        var value = localStorage.getItem(key);


        // Display the key and value.

        storageDiv.innerHTML +=
            "<p>" +
            key +
            ": " +
            value +
            "</p>";
    }
}


// ========================================
// Connect buttons to functions
// ========================================

document.getElementById("saveBtn").addEventListener(
    "click",
    saveData
);

document.getElementById("getBtn").addEventListener(
    "click",
    getData
);

document.getElementById("removeBtn").addEventListener(
    "click",
    removeData
);

document.getElementById("clearBtn").addEventListener(
    "click",
    clearData
);


// ========================================
// Display storage when page loads
// ========================================

displayStorage();