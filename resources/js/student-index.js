document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("studentSearch");
    const table = document.getElementById("studentTable");
    const noResults = document.getElementById("noResults");


    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.toLowerCase().trim();

        const rows = table.querySelectorAll("tbody tr:not(#noResults)");

        let visibleRows = 0;


        rows.forEach(function (row) {

            const rowText = row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {

                row.style.display = "";

                visibleRows++;

            } else {

                row.style.display = "none";

            }

        });


        if (visibleRows === 0) {

            noResults.style.display = "";

        } else {

            noResults.style.display = "none";

        }

    });

});