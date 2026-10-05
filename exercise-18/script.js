// ========================================
// Exercise 19 — Cookies & Preferences
// Manager
// ========================================


// ========================================
// 1. Set a cookie
// ========================================

// name = cookie name
// value = cookie value
// days = how many days it should exist

function setCookie(name, value, days) {

    // Create a date.

    var date = new Date();


    // Add the number of days.

    date.setTime(
        date.getTime() +
        (days * 24 * 60 * 60 * 1000)
    );


    // Create the expiration date.

    var expires =
        "expires=" + date.toUTCString();


    // Save the cookie.

    document.cookie =
        name +
        "=" +
        value +
        ";" +
        expires +
        ";path=/";
}


// ========================================
// 2. Read a cookie
// ========================================

function getCookie(name) {

    // Get all cookies.

    var cookies = document.cookie.split(";");


    // Check every cookie.

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].trim();


        // Check if this is the cookie
        // we are looking for.

        if (cookie.indexOf(name + "=") === 0) {

            // Return the value.

            return cookie.substring(
                name.length + 1
            );
        }
    }


    // Cookie was not found.

    return null;
}


// ========================================
// 3. Delete a cookie
// ========================================

function deleteCookie(name) {

    // Setting the expiration date
    // to the past deletes the cookie.

    document.cookie =
        name +
        "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}


// ========================================
// 4. Get HTML elements
// ========================================

var preferences =
    document.getElementById("preferences");


// ========================================
// 5. Save theme
// ========================================

function saveTheme(theme) {

    setCookie(
        "theme",
        theme,
        30
    );

    displayPreferences();
}


// ========================================
// 6. Save language
// ========================================

function saveLanguage(language) {

    setCookie(
        "language",
        language,
        30
    );

    displayPreferences();
}


// ========================================
// 7. Display saved preferences
// ========================================

function displayPreferences() {

    // Read the cookies.

    var theme = getCookie("theme");

    var language = getCookie("language");


    // If no theme exists,
    // use "Not selected".

    if (theme === null) {

        theme = "Not selected";

    }


    // If no language exists,
    // use "Not selected".

    if (language === null) {

        language = "Not selected";

    }


    // Display the preferences.

    preferences.innerHTML = `
        <p>Theme: ${theme}</p>

        <p>Language: ${language}</p>
    `;
}


// ========================================
// 8. Theme buttons
// ========================================

document.getElementById("lightBtn")
    .addEventListener("click", function() {

        saveTheme("light");

    });


document.getElementById("darkBtn")
    .addEventListener("click", function() {

        saveTheme("dark");

    });


// ========================================
// 9. Language buttons
// ========================================

document.getElementById("englishBtn")
    .addEventListener("click", function() {

        saveLanguage("English");

    });


document.getElementById("arabicBtn")
    .addEventListener("click", function() {

        saveLanguage("Arabic");

    });


// ========================================
// 10. Delete preferences
// ========================================

document.getElementById("deleteBtn")
    .addEventListener("click", function() {

        deleteCookie("theme");

        deleteCookie("language");

        displayPreferences();

    });


// ========================================
// 11. Display preferences on page load
// ========================================

displayPreferences();