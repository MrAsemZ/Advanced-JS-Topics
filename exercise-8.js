// ========================================
// Exercise 8 — Destructuring & Default Parameters
// ========================================


// ========================================
// 1. Create a user object
// ========================================

var user = {

    name: "Ahmad",
    email: "ahmad@example.com",
    age: 25,
    address: "Amman, Jordan"

};


// ========================================
// 2. Object destructuring
// ========================================

// Instead of doing:
//
// var name = user.name;
// var email = user.email;
//
// We can use destructuring.

var { name, email, age, address } = user;

console.log("Name:");
console.log(name);

console.log("Email:");
console.log(email);

console.log("Age:");
console.log(age);

console.log("Address:");
console.log(address);


// ========================================
// 3. Rename a property
// ========================================

// We can give the extracted variable
// a different name.
//
// user.name → userName

var { name: userName } = user;

console.log("Renamed name:");
console.log(userName);


// ========================================
// 4. Array destructuring
// ========================================

// Create a list of skills.

var skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git"
];


// Extract values from the array.

var [skill1, skill2, skill3, skill4] = skills;

console.log("Skill 1:");
console.log(skill1);

console.log("Skill 2:");
console.log(skill2);

console.log("Skill 3:");
console.log(skill3);

console.log("Skill 4:");
console.log(skill4);


// ========================================
// 5. createUser() with default parameters
// ========================================

// Default values are used when
// an argument is NOT provided.

function createUser(
    name = "Unknown",
    email = "No email",
    age = 18
) {

    return {
        name: name,
        email: email,
        age: age
    };

}


// ========================================
// 6. Create a user with all values
// ========================================

var user1 = createUser(
    "Sara",
    "sara@example.com",
    22
);

console.log("User 1:");
console.log(user1);


// ========================================
// 7. Omit an optional parameter
// ========================================

// We only provide the name.
//
// email and age are not provided.
//
// Therefore JavaScript uses the
// default values.

var user2 = createUser("Omar");

console.log("User 2:");
console.log(user2);


// Output:
//
// {
//     name: "Omar",
//     email: "No email",
//     age: 18
// }


// ========================================
// 8. Omit everything
// ========================================

// We don't provide ANY arguments.
//
// JavaScript uses all the default values.

var user3 = createUser();

console.log("User 3:");
console.log(user3);


// Output:
//
// {
//     name: "Unknown",
//     email: "No email",
//     age: 18
// }