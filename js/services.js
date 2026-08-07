// ========================================
// VICTORY FOOTBALL CLUB - SERVICES.JS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. DARK / LIGHT MODE
    // ========================================

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️ Light Mode";
            } else {
                themeBtn.textContent = "🌙 Dark Mode";
            }

        });

    }


    // ========================================
    // 2. TICKET FORM SHOW / HIDE
    // ========================================

    const buyTicket = document.getElementById("buyTicket");
    const ticketForm = document.getElementById("ticketForm");

    if (buyTicket && ticketForm) {

        ticketForm.style.display = "none";

        buyTicket.addEventListener("click", function () {

            if (ticketForm.style.display === "none") {

                ticketForm.style.display = "block";
                buyTicket.textContent = "Close Booking Form";

            } else {

                ticketForm.style.display = "none";
                buyTicket.textContent = "Buy Tickets";

            }

        });

    }


    // ========================================
    // 3. TICKET BOOKING VALIDATION
    //    + TICKET PRICE CALCULATOR
    // ========================================

    const submitTicket = document.getElementById("submitTicket");

    const buyerName = document.getElementById("buyerName");

    const buyerEmail = document.getElementById("buyerEmail");

    const ticketNumber = document.getElementById("ticketNumber");

    const ticketMessage = document.getElementById("ticketMessage");


    if (submitTicket) {

        submitTicket.addEventListener("click", function () {

            const name = buyerName.value.trim();

            const email = buyerEmail.value.trim();

            const tickets = Number(ticketNumber.value);


            // Check name
            if (name === "") {

                ticketMessage.textContent =
                    "Please enter your full name.";

                return;

            }


            // Check email
            if (email === "" || !email.includes("@")) {

                ticketMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }


            // Check ticket quantity
            if (tickets < 1 || isNaN(tickets)) {

                ticketMessage.textContent =
                    "Please enter at least one ticket.";

                return;

            }


            // Calculate ticket price
            const ticketPrice = 500;

            const totalPrice = tickets * ticketPrice;


            // Successful booking
            ticketMessage.textContent =
                `Thank you ${name}! Your request for ${tickets} ticket(s) has been received. Total price: KSh ${totalPrice}.`;

        });

    }


    // ========================================
    // 4. TRAINING SCHEDULE INTERACTION
    // ========================================

    const trainingRows =
        document.querySelectorAll(".training-schedule tbody tr");


    trainingRows.forEach(function (row) {

        row.addEventListener("click", function () {

            // Remove previous selection
            trainingRows.forEach(function (otherRow) {

                otherRow.classList.remove("selected-row");

            });


            // Select clicked row
            row.classList.add("selected-row");

        });

    });


    // ========================================
    // 5. SERVICE CARD INTERACTION
    // ========================================

    const serviceCards =
        document.querySelectorAll(".service-card");


    serviceCards.forEach(function (card) {

        card.addEventListener("click", function () {

            // Remove active state from other cards
            serviceCards.forEach(function (otherCard) {

                otherCard.classList.remove("active-service");

            });


            // Activate selected card
            card.classList.add("active-service");

        });

    });


    // ========================================
    // 6. SCROLL REVEAL FOR ACHIEVEMENTS
    // ========================================

    const achievementCards =
        document.querySelectorAll(".achievement-card");


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-achievement");

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    achievementCards.forEach(function (card) {

        observer.observe(card);

    });


    // ========================================
    // 7. BUTTON FEEDBACK
    // ========================================

    const buttons = document.querySelectorAll(".btn");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.95)";


            setTimeout(function () {

                button.style.transform = "scale(1)";

            }, 150);

        });

    });

});