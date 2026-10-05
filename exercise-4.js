// ========================================
// Exercise 4 — Student Records Manager
// ========================================


// ========================================
// 1. Create an array with 50 student objects
// ========================================

var students = [

    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 78 },
    { id: 4, name: "Lina", grade: 95 },
    { id: 5, name: "Yousef", grade: 88 },
    { id: 6, name: "Noor", grade: 73 },
    { id: 7, name: "Khaled", grade: 81 },
    { id: 8, name: "Maya", grade: 90 },
    { id: 9, name: "Ali", grade: 67 },
    { id: 10, name: "Dana", grade: 84 },

    { id: 11, name: "Hassan", grade: 76 },
    { id: 12, name: "Rana", grade: 91 },
    { id: 13, name: "Sami", grade: 80 },
    { id: 14, name: "Leen", grade: 87 },
    { id: 15, name: "Zaid", grade: 94 },
    { id: 16, name: "Hala", grade: 72 },
    { id: 17, name: "Tareq", grade: 89 },
    { id: 18, name: "Farah", grade: 96 },
    { id: 19, name: "Adam", grade: 75 },
    { id: 20, name: "Lama", grade: 83 },

    { id: 21, name: "Fadi", grade: 79 },
    { id: 22, name: "Aya", grade: 93 },
    { id: 23, name: "Majd", grade: 68 },
    { id: 24, name: "Rami", grade: 86 },
    { id: 25, name: "Dina", grade: 82 },
    { id: 26, name: "Salma", grade: 97 },
    { id: 27, name: "Nour", grade: 74 },
    { id: 28, name: "Laith", grade: 88 },
    { id: 29, name: "Reem", grade: 90 },
    { id: 30, name: "Bashar", grade: 71 },

    { id: 31, name: "Jana", grade: 85 },
    { id: 32, name: "Malek", grade: 77 },
    { id: 33, name: "Yara", grade: 92 },
    { id: 34, name: "Alaa", grade: 69 },
    { id: 35, name: "Razan", grade: 84 },
    { id: 36, name: "Ibrahim", grade: 91 },
    { id: 37, name: "Mira", grade: 80 },
    { id: 38, name: "Ammar", grade: 87 },
    { id: 39, name: "Saja", grade: 73 },
    { id: 40, name: "Bassam", grade: 95 },

    { id: 41, name: "Hiba", grade: 89 },
    { id: 42, name: "Wael", grade: 78 },
    { id: 43, name: "Rayan", grade: 93 },
    { id: 44, name: "Samer", grade: 81 },
    { id: 45, name: "Marah", grade: 86 },
    { id: 46, name: "Eyad", grade: 70 },
    { id: 47, name: "Nada", grade: 94 },
    { id: 48, name: "Kareem", grade: 83 },
    { id: 49, name: "Sawsan", grade: 76 },
    { id: 50, name: "Amer", grade: 90

    }
];


// ========================================
// 2. Use splice() to ADD a student
// ========================================

// splice() can add a new item.
//
// First number = where to add
// Second number = how many to remove
//
// 0 means remove nothing.

students.splice(5, 0, {
    id: 51,
    name: "Nadia",
    grade: 88
});


// Nadia was added at index 5.


// ========================================
// 3. Use splice() to REMOVE a student
// ========================================

// Remove the student at index 10.
//
// 10 = starting index
// 1 = remove one student

students.splice(10, 1);


// ========================================
// 4. Use splice() to REPLACE a student
// ========================================

// Replace the student at index 15.
//
// 15 = starting index
// 1 = remove one student
// new object = add the replacement student

students.splice(15, 1, {
    id: 52,
    name: "Omar New",
    grade: 99
});


// ========================================
// 5. Use slice()
// ========================================

// slice() makes a copy of part of an array.
//
// It does NOT change the original array.
//
// Start at index 0
// Stop before index 5

var firstFiveStudents = students.slice(0, 5);

console.log("First 5 students:");
console.log(firstFiveStudents);


// The original students array is still there.


// ========================================
// 6. Sort students by grade
// ========================================

// sort() normally sorts things alphabetically.
//
// So we give it a function to sort numbers.
//
// a.grade - b.grade
// means lowest grade to highest grade.

students.sort(function(a, b) {
    return a.grade - b.grade;
});


// ========================================
// 7. Print the final list
// ========================================

// forEach() goes through every student.
//
// student = current student
// index = current position

console.log("Final student list:");

students.forEach(function(student, index) {

    console.log(
        index + 
        " - ID: " + student.id +
        ", Name: " + student.name +
        ", Grade: " + student.grade
    );

});