// ====================
// 1. FAQ Accordion
// ====================

let questions = document.querySelectorAll(".faq-btn");

questions.forEach(function(button) {
    button.addEventListener("click", function() {

        let answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });
});


// ====================
// 2. Countdown Timer
// ====================

let countdown = document.getElementById("countdown");

let matchDate = new Date("December 31, 2026 15:00:00").getTime();

setInterval(function() {

    let now = new Date().getTime();

    let distance = matchDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    countdown.innerHTML = days + " Days Left";

}, 1000);


// ====================
// 3. Testimonials
// ====================

let quotes = [
    "Victory FC helped me improve my football skills.",
    "The coaches are very supportive.",
    "I enjoy training with my teammates."
];

let index = 0;

function changeQuote() {

    document.getElementById("quote").innerHTML = quotes[index];

    index++;

    if(index == quotes.length){
        index = 0;
    }

}

setInterval(changeQuote,3000);


// ====================
// 4. Back To Top
// ====================

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


// ====================
// 5. History Modal
// ====================

let modal = document.getElementById("historyModal");

let openBtn = document.getElementById("historyBtn");

let closeBtn = document.querySelector(".close");

openBtn.onclick = function(){

    modal.style.display = "block";

}

closeBtn.onclick = function(){

    modal.style.display = "none";

}


// ====================
// 6. Welcome Message
// ====================

window.onload = function(){

    alert("Welcome to Victory Football Club!");

}