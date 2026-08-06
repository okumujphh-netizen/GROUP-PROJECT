
// ===========================
// SEASON SCHEDULE SEARCH
// ===========================

const scheduleSearch = document.getElementById("scheduleSearch");

const tableRows = document.querySelectorAll(".schedule tbody tr");


console.log("Schedule rows found:", tableRows.length);


if (scheduleSearch) {

    scheduleSearch.addEventListener("keyup", function () {

        const searchValue = scheduleSearch.value.toLowerCase();


        console.log("Searching schedule:", searchValue);


        tableRows.forEach(function (row) {

            const rowText = row.textContent.toLowerCase();


            if (rowText.includes(searchValue)) {

                row.style.display = "";

                console.log("Match found:", rowText);

            } else {

                row.style.display = "none";

            }

        });


    });

}