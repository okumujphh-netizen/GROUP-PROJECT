
// Get the theme button
const themeBtn = document.getElementById("themeBtn");

console.log("Theme button:", themeBtn);

// Check if the button exists
if (themeBtn) {

    console.log("Theme button found.");

    // Check if dark mode was previously saved
    if (localStorage.getItem("theme") === "dark") {

        console.log("Dark mode found in Local Storage.");

        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀ Light Mode";

    } else {

        console.log("Light mode is currently active.");

    }

    // Listen for button clicks
    themeBtn.addEventListener("click", function () {

        console.log("Theme button clicked.");

        // Toggle the dark-mode class
        document.body.classList.toggle("dark-mode");

        // Check which mode is active
        if (document.body.classList.contains("dark-mode")) {

            console.log("Dark mode enabled.");

            themeBtn.textContent = "☀ Light Mode";

            localStorage.setItem("theme", "dark");

            console.log("Saved 'dark' to Local Storage.");

        } else {

            console.log("Light mode enabled.");

            themeBtn.textContent = "🌙 Dark Mode";

            localStorage.setItem("theme", "light");

            console.log("Saved 'light' to Local Storage.");

        }

    });

} else {

    console.log("Theme button not found.");

}