// ========================================
// Exercise 14 — Local Storage To-Do List
// ========================================


// ========================================
// 1. Get the HTML elements
// ========================================

var taskInput = document.getElementById("taskInput");

var addBtn = document.getElementById("addBtn");

var taskList = document.getElementById("taskList");

var taskCount = document.getElementById("taskCount");

var clearBtn = document.getElementById("clearBtn");


// ========================================
// 2. Get saved tasks from localStorage
// ========================================

// localStorage can only store strings.
//
// So we use JSON.parse() to convert
// the stored string back into an array.
//
// If there are no saved tasks,
// we use an empty array [].

var tasks = JSON.parse(
    localStorage.getItem("tasks")
) || [];


// ========================================
// 3. Save tasks to localStorage
// ========================================

function saveTasks() {

    // JSON.stringify() converts our
    // JavaScript array into a string.

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// ========================================
// 4. Display all tasks
// ========================================

function displayTasks() {

    // Clear the current list first.

    taskList.innerHTML = "";


    // Go through every task.

    tasks.forEach(function(task, index) {

        // Create a list item.

        var li = document.createElement("li");


        // Display the task text.

        li.textContent = task.text;


        // ========================================
        // Mark completed tasks
        // ========================================

        if (task.completed === true) {

            li.style.textDecoration = "line-through";

        }


        // ========================================
        // Complete button
        // ========================================

        var completeBtn =
            document.createElement("button");

        completeBtn.textContent = "Complete";


        completeBtn.addEventListener(
            "click",
            function() {

                // Change completed from
                // true to false or
                // false to true.

                task.completed = !task.completed;


                // Save the updated tasks.

                saveTasks();


                // Display the updated list.

                displayTasks();

            }
        );


        // ========================================
        // Delete button
        // ========================================

        var deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "Delete";


        deleteBtn.addEventListener(
            "click",
            function() {

                // Remove one task from
                // the tasks array.

                tasks.splice(index, 1);


                // Save the updated array.

                saveTasks();


                // Display the updated list.

                displayTasks();

            }
        );


        // Add the buttons to the list item.

        li.appendChild(completeBtn);

        li.appendChild(deleteBtn);


        // Add the list item to the page.

        taskList.appendChild(li);

    });


    // ========================================
    // 5. Display number of tasks
    // ========================================

    taskCount.textContent =
        "Tasks: " + tasks.length;

}


// ========================================
// 6. Add a new task
// ========================================

function addTask() {

    // Get the text from the input.

    var text = taskInput.value;


    // Don't add an empty task.

    if (text === "") {

        alert("Please enter a task.");

        return;
    }


    // Create a new task object.

    var newTask = {

        text: text,

        completed: false

    };


    // Add the task to the array.

    tasks.push(newTask);


    // Save the array to localStorage.

    saveTasks();


    // Clear the input.

    taskInput.value = "";


    // Display the new task.

    displayTasks();

}


// ========================================
// 7. Clear all tasks
// ========================================

function clearTasks() {

    // Remove all tasks from the array.

    tasks = [];


    // Save the empty array.

    saveTasks();


    // Display the empty list.

    displayTasks();

}


// ========================================
// 8. Connect buttons
// ========================================

addBtn.addEventListener(
    "click",
    addTask
);

clearBtn.addEventListener(
    "click",
    clearTasks
);


// ========================================
// 9. Display saved tasks when page loads
// ========================================

// This is what makes the tasks
// appear again after refreshing.

displayTasks();