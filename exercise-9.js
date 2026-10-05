// ========================================
// Exercise 9 — Spread, Rest, Map & Set
// Challenge
// ========================================


// ========================================
// 1. Create two arrays of students
// ========================================

var students1 = [101, 102, 103, 104];

var students2 = [105, 106, 107, 108];


// ========================================
// 2. Use the spread operator
// ========================================

// ... spreads the values from the arrays.
//
// This combines both arrays into one array.

var allStudents = [...students1, ...students2];

console.log("All enrolled students:");
console.log(allStudents);


// Result:
//
// [101, 102, 103, 104, 105, 106, 107, 108]



// ========================================
// 3. Use rest parameter
// ========================================

// ...grades collects all the arguments
// into one array.
//
// This function can accept
// any number of grades.

function calculateAverage(...grades) {

    var total = 0;

    // Add all grades together.

    grades.forEach(function(grade) {
        total = total + grade;
    });

    // Calculate the average.

    return total / grades.length;
}


console.log("Average grade:");

console.log(
    calculateAverage(80, 90, 70, 100)
);


// Result:
//
// 85



// ========================================
// 4. Use Set to remove duplicates
// ========================================

// Imagine some student IDs
// were entered more than once.

var studentIds = [
    101,
    102,
    103,
    101,
    104,
    102,
    105
];


// Set automatically removes duplicates.

var uniqueIds = new Set(studentIds);

console.log("Unique student IDs:");
console.log(uniqueIds);


// Convert the Set back into an array.

var uniqueIdArray = [...uniqueIds];

console.log(uniqueIdArray);


// Result:
//
// [101, 102, 103, 104, 105]



// ========================================
// 5. Create a Map
// ========================================

// Map will connect:
// student ID → grade

var studentGrades = new Map();


// ========================================
// 6. Add entries to the Map
// ========================================

// set() adds an entry.

studentGrades.set(101, 85);
studentGrades.set(102, 90);
studentGrades.set(103, 78);
studentGrades.set(104, 95);

console.log("Student grades:");
console.log(studentGrades);



// ========================================
// 7. Update an entry
// ========================================

// If the ID already exists,
// set() updates its value.
//
// Student 102 was 90.
// Now the grade becomes 93.

studentGrades.set(102, 93);

console.log("Updated grade for student 102:");

console.log(
    studentGrades.get(102)
);


// Result:
//
// 93



// ========================================
// 8. Retrieve an entry
// ========================================

// get() retrieves the grade
// using the student ID.

var grade = studentGrades.get(101);

console.log("Grade of student 101:");
console.log(grade);


// Result:
//
// 85



// ========================================
// 9. Check if an entry exists
// ========================================

// has() checks if the ID exists.

console.log(
    studentGrades.has(103)
);


// Result:
//
// true



// ========================================
// 10. Delete an entry
// ========================================

// delete() removes an entry.
//
// Student 104 is removed.

studentGrades.delete(104);

console.log("After deleting student 104:");

console.log(studentGrades);



// ========================================
// 11. Convert Map to a regular array
// ========================================

// Array.from() converts the Map
// into a normal JavaScript array.

var finalStudentData = Array.from(studentGrades);

console.log("Final student data:");

console.log(finalStudentData);


// Result:
//
// [
//     [101, 85],
//     [102, 93],
//     [103, 78]
// ]


// ========================================
// 12. Display the final data
// ========================================

finalStudentData.forEach(function(student) {

    console.log(
        "Student ID: " + student[0] +
        ", Grade: " + student[1]
    );

});