// ========================================
// app.js
// ========================================


// ========================================
// Import from students.js
// ========================================

// Import named functions

import {
    getStudentById,
    getAllStudents
} from "./students.js";


// Import the default export

import students from "./students.js";


// ========================================
// Import from grades.js
// ========================================

// Import named functions

import {
    calculateAverage,
    isPassing
} from "./grades.js";


// ========================================
// Get the HTML element
// ========================================

var studentList = document.getElementById("student-list");


// ========================================
// Display students
// ========================================

students.forEach(function(student) {

    // Give each student a grade

    var grade = 80 + student.id * 5;

    // Check if they passed

    var status;

    if (isPassing(grade)) {

        status = "PASS";

    } else {

        status = "FAIL";

    }


    // Create the HTML

    var studentHTML = `
        <div>
            <h2>${student.name}</h2>
            <p>ID: ${student.id}</p>
            <p>Email: ${student.email}</p>
            <p>Grade: ${grade}</p>
            <p>Status: ${status}</p>
        </div>

        <hr>
    `;


    // Add it to the page

    studentList.innerHTML += studentHTML;

});


// ========================================
// Test getStudentById()
// ========================================

var student = getStudentById(2);

console.log("Student with ID 2:");
console.log(student);


// ========================================
// Test calculateAverage()
// ========================================

var average = calculateAverage([80, 90, 70]);

console.log("Average:");
console.log(average);