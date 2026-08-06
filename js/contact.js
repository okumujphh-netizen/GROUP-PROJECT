console.log("contact.js loaded");

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submitted");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name === "") {
        console.log("Name is empty");
        formMessage.textContent = "❌ Please enter your name.";
        formMessage.style.color = "red";
        return;
    }

    if (email === "") {
        console.log("Email is empty");
        formMessage.textContent = "❌ Please enter your email.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        console.log("Invalid email");
        formMessage.textContent = "❌ Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    if (message === "") {
        console.log("Message is empty");
        formMessage.textContent = "❌ Please enter your message.";
        formMessage.style.color = "red";
        return;
    }

    console.log("Form validation passed");

    formMessage.textContent = "✅ Thanks! Your message has been sent.";
    formMessage.style.color = "green";

    form.reset();

    setTimeout(function () {
        formMessage.textContent = "";
    }, 3000);

});