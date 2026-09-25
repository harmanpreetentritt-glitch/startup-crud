document.addEventListener('DOMContentLoaded', function () {

    console.log("Login JS is working");

    const form = document.querySelector('.login-form');

    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Email Validation
        const emailValue = inputEmail.value.trim();

        if (emailValue === '') {

            event.preventDefault();

            emailError.innerHTML = `
                <span>Email is required.</span>
            `;

        } else if (!emailPattern.test(emailValue)) {

            event.preventDefault();

            emailError.innerHTML = `
                <span>Enter a valid email.</span>
            `;

        } else {

            emailError.innerHTML = '';

        }


        // Password Validation
        const passwordValue = inputPassword.value;

        if (passwordValue === '') {

            event.preventDefault();

            passwordError.innerHTML = `
                <span>Password is required.</span>
            `;

        } else if (passwordValue.length < 6) {

            event.preventDefault();

            passwordError.innerHTML = `
                <span>Password must be at least 6 characters.</span>
            `;

        } else {

            passwordError.innerHTML = '';

        }
         window.location.href="/dashboard";

    });
  

});