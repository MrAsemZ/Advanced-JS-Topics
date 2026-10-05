// ========================================
// grades.js
// ========================================


// ========================================
// Named export
// ========================================

// Calculate the average grade.

export function calculateAverage(grades) {

    var total = 0;

    grades.forEach(function(grade) {

        total = total + grade;

    });

    return total / grades.length;
}


// ========================================
// Named export
// ========================================

// Check if a student passed.

export function isPassing(grade) {

    return grade >= 50;

}


// ========================================
// Default export
// ========================================

// Default function

export default calculateAverage;