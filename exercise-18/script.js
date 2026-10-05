// ========================================
// Exercise 18 — Session Storage
// Multi-Step Form
// ========================================


// ========================================
// 1. Get the HTML elements
// ========================================

var step1 = document.getElementById("step1");

var step2 = document.getElementById("step2");

var step3 = document.getElementById("step3");

var nameInput = document.getElementById("name");

var emailInput = document.getElementById("email");

var universityInput =
    document.getElementById("university");

var majorInput =
    document.getElementById("major");

var review =
    document.getElementById("review");


// ========================================
// 2. Get saved registration data
// ========================================

// sessionStorage stores strings.
//
// We use JSON.parse() to turn the
// saved string back into an object.
//
// If nothing is saved, use an empty object.

var registration = JSON.parse(
    sessionStorage.getItem("registration")
) || {};


// ========================================
// 3. Get the saved step
// ========================================

// sessionStorage stores values as strings.
//
// Number() converts the value into a number.
//
// If there is no saved step,
// start at step 1.

var currentStep = Number(
    sessionStorage.getItem("currentStep")
) || 1;


// ========================================
// 4. Restore saved input values
// ========================================

// If the user refreshes the page,
// put their saved information back
// into the input fields.

nameInput.value =
    registration.name || "";

emailInput.value =
    registration.email || "";

universityInput.value =
    registration.university || "";

majorInput.value =
    registration.major || "";


// ========================================
// 5. Save the form data
// ========================================

function saveData() {

    // Get the current values.

    registration.name = nameInput.value;

    registration.email = emailInput.value;

    registration.university =
        universityInput.value;

    registration.major =
        majorInput.value;


    // Convert the object into a string
    // and save it in sessionStorage.

    sessionStorage.setItem(
        "registration",
        JSON.stringify(registration)
    );
}


// ========================================
// 6. Save the current step
// ========================================

function saveStep() {

    sessionStorage.setItem(
        "currentStep",
        currentStep
    );
}


// ========================================
// 7. Show the current step
// ========================================

function showStep() {

    // Hide all steps.

    step1.style.display = "none";

    step2.style.display = "none";

    step3.style.display = "none";


    // Show Step 1.

    if (currentStep === 1) {

        step1.style.display = "block";

    }


    // Show Step 2.

    if (currentStep === 2) {

        step2.style.display = "block";

    }


    // Show Step 3.

    if (currentStep === 3) {

        step3.style.display = "block";

        showReview();

    }


    // Save the current step.

    saveStep();
}


// ========================================
// 8. Show the review information
// ========================================

function showReview() {

    review.innerHTML = `
        <p>Name: ${registration.name}</p>

        <p>Email: ${registration.email}</p>

        <p>University: ${registration.university}</p>

        <p>Major: ${registration.major}</p>
    `;
}


// ========================================
// 9. Step 1 → Step 2
// ========================================

document.getElementById("next1")
    .addEventListener("click", function() {

        // Save the information first.

        saveData();


        // Move to Step 2.

        currentStep = 2;


        // Show Step 2.

        showStep();

    });


// ========================================
// 10. Step 2 → Step 1
// ========================================

document.getElementById("back2")
    .addEventListener("click", function() {

        // Save any changes.

        saveData();


        // Move back to Step 1.

        currentStep = 1;


        // Show Step 1.

        showStep();

    });


// ========================================
// 11. Step 2 → Step 3
// ========================================

document.getElementById("next2")
    .addEventListener("click", function() {

        // Save the information.

        saveData();


        // Move to Step 3.

        currentStep = 3;


        // Show the review page.

        showStep();

    });


// ========================================
// 12. Step 3 → Step 2
// ========================================

document.getElementById("back3")
    .addEventListener("click", function() {

        // Save any changes.

        saveData();


        // Move back to Step 2.

        currentStep = 2;


        // Show Step 2.

        showStep();

    });


// ========================================
// 13. Confirm registration
// ========================================

document.getElementById("confirm")
    .addEventListener("click", function() {

        alert("Registration completed!");


        // Delete the saved information.

        sessionStorage.removeItem("registration");

        sessionStorage.removeItem("currentStep");


        // Reset the form.

        registration = {};

        nameInput.value = "";
        emailInput.value = "";
        universityInput.value = "";
        majorInput.value = "";


        // Start again from Step 1.

        currentStep = 1;

        showStep();

    });


// ========================================
// 14. Start the application
// ========================================

// This is important.
//
// If the user was on Step 2 and
// refreshed the page, currentStep
// will still be 2.
//
// So Step 2 will appear again.

showStep();