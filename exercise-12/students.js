// ========================================
// students.js
// ========================================


// Student data

var students = [

    {
        id: 1,
        name: "Ahmad",
        email: "ahmad@example.com"
    },

    {
        id: 2,
        name: "Sara",
        email: "sara@example.com"
    },

    {
        id: 3,
        name: "Omar",
        email: "omar@example.com"
    }

];


// ========================================
// Named export
// ========================================

// This function gets a student
// using their ID.

export function getStudentById(id) {

    return students.find(function(student) {

        return student.id === id;

    });

}


// Another named export

export function getAllStudents() {

    return students;

}


// ========================================
// Default export
// ========================================

// Export the students array as
// the default export.

export default students;