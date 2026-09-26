document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".student-form");

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const courseInput = document.querySelector("#course_id");
    const ageInput = document.querySelector("#age");


    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const phoneError = document.querySelector("#phoneError");
    const courseError = document.querySelector("#courseError");
    const ageError = document.querySelector("#ageError");


    const namePattern = /^[A-Za-z\s]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^\d{10}$/;


    form.addEventListener("submit", function (event) {

        let isValid = true;


        // Name

        const nameValue = nameInput.value.trim();

        if (nameValue === "") {

            nameError.textContent = "Name is required.";

            isValid = false;

        } else if (!namePattern.test(nameValue)) {

            nameError.textContent = "Enter a valid name.";

            isValid = false;

        } else {

            nameError.textContent = "";

        }


        // Email

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {

            emailError.textContent = "Email is required.";

            isValid = false;

        } else if (!emailPattern.test(emailValue)) {

            emailError.textContent = "Enter a valid email.";

            isValid = false;

        } else {

            emailError.textContent = "";

        }


        // Phone

        const phoneValue = phoneInput.value.trim();

        if (phoneValue === "") {

            phoneError.textContent = "Phone number is required.";

            isValid = false;

        } else if (!phonePattern.test(phoneValue)) {

            phoneError.textContent =
                "Enter a valid 10-digit phone number.";

            isValid = false;

        } else {

            phoneError.textContent = "";

        }


        // Course

        if (courseInput.value === "") {

            courseError.textContent = "Please select a course.";

            isValid = false;

        } else {

            courseError.textContent = "";

        }


        // Age

        const ageValue = ageInput.value.trim();

        if (ageValue === "") {

            ageError.textContent = "Age is required.";

            isValid = false;

        } else if (ageValue < 1 || ageValue > 100) {

            ageError.textContent = "Enter a valid age.";

            isValid = false;

        } else {

            ageError.textContent = "";

        }


        // Stop form submission if validation fails

        if (!isValid) {

            event.preventDefault();

        }

    });

});