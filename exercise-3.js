// ========================================
// Exercise 3 — Array Methods Playground
// ========================================


// ========================================
// 1. Create two arrays of students
// ========================================

var students1 = [
    "Ahmad",
    "Sara",
    "Omar",
    "Lina",
    "Yousef",
    "Noor",
    "Khaled",
    "Maya",
    "Ali",
    "Dana",
    "Hassan",
    "Rana",
    "Sami",
    "Leen",
    "Zaid",
    "Hala",
    "Tareq",
    "Farah",
    "Adam",
    "Lama",
    "Fadi",
    "Aya",
    "Majd",
    "Rami",
    "Dina"
];


var students2 = [
    "Salma",
    "Nour",
    "Laith",
    "Reem",
    "Bashar",
    "Jana",
    "Malek",
    "Yara",
    "Alaa",
    "Razan",
    "Ibrahim",
    "Mira",
    "Ammar",
    "Saja",
    "Bassam",
    "Hiba",
    "Wael",
    "Rayan",
    "Samer",
    "Marah",
    "Eyad",
    "Nada",
    "Kareem",
    "Sawsan",
    "Amer"
];


// ========================================
// 2. Use concat()
// ========================================

// concat() combines two arrays.
//
// students1 + students2
// = one big array

var students = students1.concat(students2);

console.log(students);



// ========================================
// 3. Use sort()
// ========================================

// sort() sorts the names alphabetically.

students.sort();

console.log("Sorted students:");
console.log(students);



// ========================================
// 4. Use reverse()
// ========================================

// reverse() changes the order
// from first to last
// into last to first.

students.reverse();

console.log("Reversed students:");
console.log(students);



// ========================================
// 5. Use includes()
// ========================================

// includes() checks if a value
// exists inside the array.
//
// It returns true or false.

var studentExists = students.includes("Ahmad");

console.log("Does Ahmad exist?");
console.log(studentExists);


// Example:
// true = student exists
// false = student does not exist



// ========================================
// 6. Use forEach()
// ========================================

// forEach() goes through every student.
//
// "student" = current student
// "index" = student's position in the array

students.forEach(function(student, index) {

    console.log(index + ": " + student);

});