

// ===========================
// NEWS SLIDER
// ===========================

// Array containing all news articles
const news = [
    {
        title: "Victory FC Maintain Perfect Start to the Season",
        text: "Victory FC made it two wins from two league matches after a convincing 3-0 away victory over Coastal Warriors. The team now sits near the top of the league table with six points."
    },

    {
        title: "Daniel Mwangi Leads Scoring Charts",
        text: "Striker Daniel Mwangi continued his fine form by scoring his second goal of the campaign, helping Victory FC secure another important league victory."
    },

    {
        title: "Highland Stars Clash Next for Victory FC",
        text: "Attention now turns to Matchday 3 as Victory FC prepares to host Highland Stars at Victory Stadium on 29 August 2026."
    }
];

console.log("News Array:", news);

// Keep track of the current news item
let currentNews = 0;

console.log("Current News Index:", currentNews);

// Get the HTML elements
const newsTitle = document.getElementById("newsTitle");
const newsText = document.getElementById("newsText");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Function to display a news article
function displayNews() {

    newsTitle.textContent = news[currentNews].title;
    newsText.textContent = news[currentNews].text;

    console.log("Displaying News:");
    console.log("Title:", news[currentNews].title);
    console.log("Text:", news[currentNews].text);
}

// Display the first article when the page loads
displayNews();

// Next button
nextBtn.addEventListener("click", function () {

    currentNews++;

    if (currentNews >= news.length) {

        currentNews = 0;

    }

    console.log("Next Button Clicked");
    console.log("Current Index:", currentNews);

    displayNews();

});

// Previous button
prevBtn.addEventListener("click", function () {

    currentNews--;

    if (currentNews < 0) {

        currentNews = news.length - 1;

    }

    console.log("Previous Button Clicked");
    console.log("Current Index:", currentNews);

    displayNews();

});

// Automatically change news every 5 seconds
setInterval(function () {

    currentNews++;

    if (currentNews >= news.length) {

        currentNews = 0;

    }

    console.log("Auto Slide");
    console.log("Current Index:", currentNews);

    displayNews();

}, 5000);


// ===========================
// COUNTDOWN TIMER
// ===========================

// Set the date and time of the next match
const matchDate = new Date("August 15, 2026 15:00:00").getTime();

console.log("Match Date:", new Date(matchDate));

// Get the countdown element
const countdown = document.getElementById("countdown");

// Update the countdown every second
const timer = setInterval(function () {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = matchDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    countdown.textContent =
        `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

    console.log(
        `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`
    );

    // If the match time has arrived
    if (distance <= 0) {

        clearInterval(timer);

        countdown.textContent = "⚽ Match Day!";

        console.log("Match Day Reached!");

    }

}, 1000);