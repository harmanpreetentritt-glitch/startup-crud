document.addEventListener('DOMContentLoaded', function () {

    const namePattern = /^[A-Za-z\s]+$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^\d{10}$/;


    const input = document.querySelector('#name');

    const inputEmail = document.querySelector('#email');

    const inputPhone = document.querySelector('#phone');

    const inputPassword = document.querySelector('#password');


    const form = document.querySelector(".signup-form");


    const nameError = document.querySelector('#nameError');

    const emailError = document.querySelector('#emailError');

    const phoneError = document.querySelector('#phoneError');

    const passwordError = document.querySelector('#passwordError');


    /* TOGGLE PASSWORD */

    const togglePassword = document.querySelector('.toggle-password');

    if (togglePassword) {

        togglePassword.onclick = function () {

            if (inputPassword.type === 'password') {

                inputPassword.type = 'text';

            } else {

                inputPassword.type = 'password';

            }

        };

    }


    /* FORM VALIDATION*/

    if (form) {

        form.addEventListener('submit', function (event) {

            let isValid = true;


            /* NAME*/

            const nameValue = input.value.trim();

            if (nameValue === "") {

                nameError.innerHTML = `
                    <div>
                        <span>Name is required.</span>
                    </div>
                `;

                isValid = false;

            } else if (!namePattern.test(nameValue)) {

                nameError.innerHTML = `
                    <div>
                        <span>Enter a valid name.</span>
                    </div>
                `;

                isValid = false;

            } else {

                nameError.innerHTML = "";

            }


            /* EMAIL*/

            const emailValue = inputEmail.value.trim();

            if (emailValue === "") {

                emailError.innerHTML = `
                    <div>
                        <span>Email is required.</span>
                    </div>
                `;

                isValid = false;

            } else if (!emailPattern.test(emailValue)) {

                emailError.innerHTML = `
                    <div>
                        <span>Enter a valid email.</span>
                    </div>
                `;

                isValid = false;

            } else {

                emailError.innerHTML = "";

            }


            /* PHONE */

            const phoneValue = inputPhone.value.trim();

            if (phoneValue === "") {

                phoneError.innerHTML = `
                    <div>
                        <span>Phone number is required.</span>
                    </div>
                `;

                isValid = false;

            } else if (!phonePattern.test(phoneValue)) {

                phoneError.innerHTML = `
                    <div>
                        <span>Enter a valid 10-digit phone number.</span>
                    </div>
                `;

                isValid = false;

            } else {

                phoneError.innerHTML = "";

            }


            /*PASSWORD*/

            const passwordValue = inputPassword.value;

            if (passwordValue === "") {

                passwordError.innerHTML = `
                    <div>
                        <span>Password is required.</span>
                    </div>
                `;

                isValid = false;

            } else if (passwordValue.length < 6) {

                passwordError.innerHTML = `
                    <div>
                        <span>Password must be at least 6 characters.</span>
                    </div>
                `;

                isValid = false;

            } else {

                passwordError.innerHTML = "";

            }


            /* STOP SUBMISSION */

            if (!isValid) {

                event.preventDefault();

            }

        });

    }

});