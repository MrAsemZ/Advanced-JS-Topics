// ========================================
// Exercise 2 — Constructor Functions
// & Prototypal Inheritance
// ========================================


// ========================================
// 1. Create a Person constructor
// ========================================

// Person has name and age
function Person(name, age) {

    this.name = name;
    this.age = age;
}


// ========================================
// 2. Add greet() to Person.prototype
// ========================================

// We put greet() in the prototype
// so all Person objects can use it.

Person.prototype.greet = function() {
//*prototype is shared place for methods
    console.log("Hello, my name is " + this.name);
};


// ========================================
// 3. Create an Employee constructor
// ========================================

// Employee has employeeId and position

function Employee(name, age, employeeId, position) {

    // Call Person constructor
    // to get name and age

    Person.call(this, name, age);

    this.employeeId = employeeId;
    this.position = position;
}


// ========================================
// 4. Make Employee inherit from Person
// ========================================

// Employee.prototype gets the methods
// from Person.prototype.

Employee.prototype = Object.create(Person.prototype);


// Fix the constructor property
// so Employee is still recognized
// as the Employee constructor.

Employee.prototype.constructor = Employee;


// ========================================
// 5. Override greet()
// ========================================

// Employee already inherited greet()
// from Person.
//
// But here we create a new greet()
// for Employee.

Employee.prototype.greet = function() {

    console.log(
        "Hello, my name is " +
        this.name +
        " and I am a " +
        this.position
    );
};


// ========================================
// 6. Create three employees
// ========================================

var employee1 = new Employee(
    "Ahmad",
    25,
    101,
    "Developer"
);

var employee2 = new Employee(
    "Sara",
    28,
    102,
    "Designer"
);

var employee3 = new Employee(
    "Omar",
    30,
    103,
    "Manager"
);


// ========================================
// 7. Demonstrate inheritance
// ========================================

// Employee has its own properties:
console.log(employee1.name);       // Ahmad
console.log(employee1.age);        // 25
console.log(employee1.employeeId); // 101
console.log(employee1.position);   // Developer


// Employee also has access to methods
// through its prototype.

employee1.greet();
employee2.greet();
employee3.greet();


// Output:
//
// Hello, my name is Ahmad and I am a Developer
// Hello, my name is Sara and I am a Designer
// Hello, my name is Omar and I am a Manager