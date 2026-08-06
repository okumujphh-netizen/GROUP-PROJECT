// ===========================
// NEWSLETTER EMAIL VALIDATION
// ===========================

console.log("news.js loaded");
const newsletterForm = document.getElementById("newsletterForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");



if(newsletterForm){


    newsletterForm.addEventListener("submit", function(event){


        // Stop page refresh
        event.preventDefault();



        const email = emailInput.value.trim();



        console.log("Email entered:", email);



        // Email validation pattern
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");


newsletterForm.addEventListener("submit", function(event){

    event.preventDefault();

      console.log("Form submitted");


    console.log("Email entered:", emailInput.value);


    if(emailInput.value === ""){

        message.textContent = "❌ Please enter your email";

    }

    else if(!emailInput.checkValidity()){

        message.textContent = "❌ Please enter a valid email address";

    }

    else{

        message.textContent = "✅ Successfully subscribed to Victory FC news!";

        newsletterForm.reset();

    }

})