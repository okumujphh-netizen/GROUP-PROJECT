const buyTicket = document.getElementById("buyTicket");

const ticketForm = document.getElementById("ticketForm");

const submitTicket = document.getElementById("submitTicket");

const ticketMessage = document.getElementById("ticketMessage");


// Show form

buyTicket.addEventListener("click", function(){

    ticketForm.style.display = "block";

    console.log("Ticket form opened");

});



// Submit booking

submitTicket.addEventListener("click", function(){


    let name = document.getElementById("buyerName").value;

    let email = document.getElementById("buyerEmail").value;

    let tickets = document.getElementById("ticketNumber").value;



    if(name === "" || email === "" || tickets === ""){


        ticketMessage.textContent =
        "❌ Please fill in all details.";

        ticketMessage.style.color = "red";

        return;

    }



    ticketMessage.textContent =
    "✅ Booking successful! Thank you " + name;


    ticketMessage.style.color = "green";


    console.log("Booking:", name, email, tickets);



});

