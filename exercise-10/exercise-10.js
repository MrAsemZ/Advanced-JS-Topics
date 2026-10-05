// ========================================
// Exercise 10 — Dynamic Student Report
// ========================================


// ========================================
// 1. Create an array of students
// ========================================

var students = [

    {
        id: 1,
        name: "Ahmad",
        grade: 85
    },

    {
        id: 2,
        name: "Sara",
        grade: 92
    },

    {
        id: 3,
        name: "Omar",
        grade: 45
    },

    {
        id: 4,
        name: "Lina",
        grade: 76
    },

    {
        id: 5,
        name: "Yousef",
        grade: 50
    }

];


// ========================================
// 2. Get the HTML element
// ========================================

// We will put the reports inside
// the element with id="reports".

var reports = document.getElementById("reports");


// ========================================
// 3. Generate a report for each student
// ========================================

students.forEach(function(student) {

    // Check if the student passed.

    var status;

    if (student.grade >= 50) {

        status = "PASS";

    } else {

        status = "FAIL";

    }


    // ========================================
    // 4. Create a multiline report
    // ========================================

    // Template literals use backticks ` `
    // instead of normal quotes.

    var report = `
        <div>
            <h2>${student.name}</h2>
            <p>ID: ${student.id}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${status}</p>
        </div>

        <hr>
    `;


    // ========================================
    // 5. Display the report in the browser
    // ========================================

    // innerHTML adds the report
    // to the HTML page.

    reports.innerHTML += report;

});