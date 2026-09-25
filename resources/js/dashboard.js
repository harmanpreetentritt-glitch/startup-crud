document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CURRENT DATE & TIME
    // =========================

    const dateElement = document.getElementById("currentDate");

    function updateDateTime() {

        const now = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        dateElement.textContent = now.toLocaleDateString(
            "en-IN",
            options
        );
    }

    updateDateTime();


    // =========================
    // LOGOUT CONFIRMATION
    // =========================

    const logoutButton = document.querySelector(".logout-btn");

    logoutButton.addEventListener("click", function (event) {

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) {
            event.preventDefault();
        }

    });


    // =========================
    // CARD LOAD ANIMATION
    // =========================

    const cards = document.querySelectorAll(".dashboard-card");

    cards.forEach(function (card, index) {

        setTimeout(function () {
            card.classList.add("show");
        }, index * 150);

    });

});