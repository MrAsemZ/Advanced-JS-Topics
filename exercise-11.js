// ========================================
// Exercise 11 — Classes & Inheritance
// ========================================


// ========================================
// 1. Create the Person class
// ========================================

class Person {

    // Constructor receives name and email

    constructor(name, email) {

        this.name = name;
        this.email = email;

    }


    // Method that gives information
    // about the person

    getInfo() {

        return "Name: " + this.name +
               ", Email: " + this.email;

    }

}


// ========================================
// 2. Create the Student class
// ========================================

// extends means Student inherits
// from Person.

class Student extends Person {

    constructor(name, email, studentId, major) {

        // super() calls the Person constructor.
        //
        // It gives Person:
        // name and email

        super(name, email);

        // Student's own properties

        this.studentId = studentId;
        this.major = major;

    }


    // ========================================
    // 3. Override getInfo()
    // ========================================

    // Student already inherited getInfo()
    // from Person.
    //
    // But we create our own version here.

    getInfo() {

        return "Student: " +
               this.name +
               ", Email: " +
               this.email +
               ", ID: " +
               this.studentId +
               ", Major: " +
               this.major;

    }

}


// ========================================
// 4. Create the Instructor class
// ========================================

class Instructor extends Person {

    constructor(name, email, instructorId, subject) {

        // Call the Person constructor

        super(name, email);

        // Instructor's own properties

        this.instructorId = instructorId;
        this.subject = subject;

    }

}


// ========================================
// 5. Create a Person
// ========================================

var person1 = new Person(
    "Ahmad",
    "ahmad@example.com"
);

console.log("Person:");
console.log(person1.getInfo());


// ========================================
// 6. Create a Student
// ========================================

var student1 = new Student(
    "Sara",
    "sara@example.com",
    101,
    "Computer Science"
);

console.log("Student:");
console.log(student1.getInfo());


// ========================================
// 7. Create an Instructor
// ========================================

var instructor1 = new Instructor(
    "Omar",
    "omar@example.com",
    201,
    "JavaScript"
);

console.log("Instructor:");
console.log(instructor1.getInfo());


// ========================================
// 8. Demonstrate inheritance
// ========================================

// Student inherited name and email
// from Person.

console.log(student1.name);
console.log(student1.email);


// Instructor also inherited
// name and email from Person.

console.log(instructor1.name);
console.log(instructor1.email);


// ========================================
// 9. Check inheritance
// ========================================

console.log(student1 instanceof Student);
// true

console.log(student1 instanceof Person);
// true

console.log(instructor1 instanceof Instructor);
// true

console.log(instructor1 instanceof Person);
// true