// ===============================
// Victory Football Club - services.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Victory Football Club Services Page Loaded");

    // ==========================================
    // Welcome Message
    // ==========================================

    setTimeout(function () {
        alert("Welcome to Victory Football Club Services!");
    }, 500);

    // ==========================================
    // Smooth Scrolling
    // ==========================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link){

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================================
    // Service Card Hover Effect
    // ==========================================

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(function(card){

        card.addEventListener("mouseenter", function(){

            this.style.transform = "scale(1.03)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function(){

            this.style.transform = "scale(1)";

        });

    });

    // ==========================================
    // Buttons Click Effect
    // ==========================================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            alert("Thank you for your interest in Victory Football Club!");

        });

    });

    // ==========================================
    // Training Table Highlight
    // ==========================================

    const rows = document.querySelectorAll(".training-schedule tbody tr");

    rows.forEach(function(row){

        row.addEventListener("click", function(){

            rows.forEach(function(r){

                r.style.backgroundColor = "";

            });

            this.style.backgroundColor = "#c8f7c5";

        });

    });

    // ==========================================
    // Achievement Cards Animation
    // ==========================================

    const achievementCards = document.querySelectorAll(".achievement-card");

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    });

    achievementCards.forEach(function(card){

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s ease";

        observer.observe(card);

    });

});