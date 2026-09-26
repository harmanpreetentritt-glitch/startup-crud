document.addEventListener('DOMContentLoaded', function () {

    console.log("Login JS is working");

    const form = document.querySelector('.login-form');

    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    form.addEventListener('submit', function (event) {

        let isValid = true;


        // Email Validation

        const emailValue = inputEmail.value.trim();

        if (emailValue === '') {

            emailError.textContent = 'Email is required.';
            isValid = false;

        } else if (!emailPattern.test(emailValue)) {

            emailError.textContent = 'Enter a valid email.';
            isValid = false;

        } else {

            emailError.textContent = '';

        }


        // Password Validation

        const passwordValue = inputPassword.value;

        if (passwordValue === '') {

            passwordError.textContent = 'Password is required.';
            isValid = false;

        } else if (passwordValue.length < 6) {

            passwordError.textContent =
                'Password must be at least 6 characters.';

            isValid = false;

        } else {

            passwordError.textContent = '';

        }


        // Stop form if JavaScript validation fails

        if (!isValid) {
            event.preventDefault();
        }

    });

});