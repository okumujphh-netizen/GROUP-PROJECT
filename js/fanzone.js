// ===========================
// FAN POLL
// ===========================

const voteButtons = document.querySelectorAll(".vote-btn");
const voteMessage = document.getElementById("voteMessage");

if (voteButtons.length > 0) {

    voteButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            // Check if the user has already voted
            if (localStorage.getItem("fanVote")) {

                voteMessage.textContent = "❌ You have already voted.";
                return;
            }

            // Save the selected player
            localStorage.setItem("fanVote", button.textContent);

            voteMessage.textContent =
                "✅ Thank you for voting for " + button.textContent + "!";

        });

    });

}