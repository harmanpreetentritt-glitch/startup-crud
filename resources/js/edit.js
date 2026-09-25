const duration = document.getElementById("duration");
const lengthGroup = document.getElementById("lengthGroup");
const lengthLabel = document.getElementById("lengthLabel");
const lengthInput = document.getElementById("length");

function updateLengthLabel() {

    const selectedDuration = duration.value;

    if (selectedDuration === "") {

        lengthGroup.style.display = "none";
        lengthInput.value = "";

        return;
    }

    lengthGroup.style.display = "block";


    if (selectedDuration === "Hourly") {

        lengthLabel.textContent = "Length (Hours)";

    } else if (selectedDuration === "Weekly") {

        lengthLabel.textContent = "Length (Weeks)";

    } else if (selectedDuration === "Monthly") {

        lengthLabel.textContent = "Length (Months)";

    } else if (selectedDuration === "Quarterly") {

        lengthLabel.textContent = "Length (Quarters)";

    } else if (selectedDuration === "Half-yearly") {

        lengthLabel.textContent = "Length (Half-Years)";

    } else if (selectedDuration === "Yearly") {

        lengthLabel.textContent = "Length (Years)";
    }
}


if (duration) {

    duration.addEventListener("change", updateLengthLabel);

    // Show the correct label when editing
    updateLengthLabel();
}