// ========================================
// Exercise 19 — Cookies & Preferences
// Manager
// ========================================


// ========================================
// 1. Create a cookie
// ========================================

// name  = cookie name
// value = cookie value
// days  = number of days until expiration

function setCookie(name, value, days) {

    // Create a new Date object.

    var date = new Date();


    // Add the number of days to the
    // current date.

    date.setTime(
        date.getTime() +
        (days * 24 * 60 * 60 * 1000)
    );


    // Convert the expiration date
    // into the required cookie format.

    var expires =
        "expires=" + date.toUTCString();


    // Create the cookie.

    document.cookie =
        name +
        "=" +
        value +
        ";" +
        expires +
        ";path=/";
}


// ========================================
// 2. Read a cookie by name
// ========================================

function getCookie(name) {

    // Get all cookies.

    var cookies = document.cookie.split(";");


    // Check each cookie.

    for (var i = 0; i < cookies.length; i++) {

        // Remove extra spaces.

        var cookie = cookies[i].trim();


        // Check if this is the cookie
        // we are looking for.

        if (cookie.indexOf(name + "=") === 0) {

            // Return only the value.

            return cookie.substring(
                name.length + 1
            );
        }
    }


    // If the cookie does not exist.

    return null;
}


// ========================================
// 3. Delete a cookie
// ========================================

function deleteCookie(name) {

    // Setting the expiration date
    // in the past removes the cookie.

    document.cookie =
        name +
        "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}


// ========================================
// 4. Get the preferences div
// ========================================

var preferences =
    document.getElementById("preferences");


// ========================================
// 5. Save the theme preference
// ========================================

function saveTheme(theme) {

    // Save the theme for 30 days.

    setCookie(
        "theme",
        theme,
        30
    );


    // Update the display.

    displayPreferences();
}


// ========================================
// 6. Save the language preference
// ========================================

function saveLanguage(language) {

    // Save the language for 30 days.

    setCookie(
        "language",
        language,
        30
    );


    // Update the display.

    displayPreferences();
}


// ========================================
// 7. Display saved preferences
// ========================================

function displayPreferences() {

    // Read the theme cookie.

    var theme = getCookie("theme");


    // Read the language cookie.

    var language = getCookie("language");


    // If there is no theme saved,
    // display "Not selected".

    if (theme === null) {

        theme = "Not selected";

    }


    // If there is no language saved,
    // display "Not selected".

    if (language === null) {

        language = "Not selected";

    }


    // Display the preferences
    // in the browser.

    preferences.innerHTML = `
        <p>Theme: ${theme}</p>
        <p>Language: ${language}</p>
    `;
}


// ========================================
// 8. Light theme button
// ========================================

document.getElementById("lightBtn")
    .addEventListener("click", function() {

        saveTheme("light");

    });


// ========================================
// 9. Dark theme button
// ========================================

document.getElementById("darkBtn")
    .addEventListener("click", function() {

        saveTheme("dark");

    });


// ========================================
// 10. English button
// ========================================

document.getElementById("englishBtn")
    .addEventListener("click", function() {

        saveLanguage("English");

    });


// ========================================
// 11. Arabic button
// ========================================

document.getElementById("arabicBtn")
    .addEventListener("click", function() {

        saveLanguage("Arabic");

    });


// ========================================
// 12. Delete preferences
// ========================================

document.getElementById("deleteBtn")
    .addEventListener("click", function() {

        // Delete both cookies.

        deleteCookie("theme");

        deleteCookie("language");


        // Update the display.

        displayPreferences();

    });


// ========================================
// 13. Display preferences when
//     the page loads
// ========================================

displayPreferences();