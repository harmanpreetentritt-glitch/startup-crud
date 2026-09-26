<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration</title>

    <script src="https://kit.fontawesome.com/e5045e0eb5.js" crossorigin="anonymous"></script>

    @vite(['resources/css/signup.css', 'resources/js/signup.js'])

</head>

<body>

    <div class="signup-page">

        <div class="signup-card">

            <div class="signup-brand">
                <span class="brand-icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                </span>

                <h1>Student Registration</h1>
                <p>Create your student account to get started.</p>
            </div>
            <form class="signup-form" method="POST" action="{{ url('/signup') }}" novalidate>

                @csrf

                <!-- Name -->
                <div class="form-group">
                    <label for="name">Full Name</label>

                    <input type="text" id="name" name="name" placeholder="Enter your full name" required
                        value="{{ old('name') }}">


                    <span id="nameError" class="field-error"></span>

                </div>


                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email Address</label>

                    <input type="email" id="email" name="email" placeholder="you@example.com" required
                        value="{{ old('email') }}">


                    <span id="emailError" class="field-error"></span>

                </div>


                <!-- Phone -->
                <div class="form-group">
                    <label for="phone">Phone Number</label>

                    <input type="tel" id="phone" name="phone" placeholder="Enter your 10-digit phone number" required
                        value="{{ old('phone') }}">


                    <span id="phoneError" class="field-error"></span>

                </div>


                <!-- Password -->
                <div class="form-group">
                    <label for="password">Password</label>

                    <div class="password-wrapper">

                        <input type="password" id="password" name="password" placeholder="Create a password" required>

                        <!-- <i
                            class="fa-solid fa-eye toggle-password"
                            data-target="password"
                        ></i> -->

                    </div>
                    <span id="passwordError" class="field-error"></span>

                </div>


                <!-- Register -->
                <button type="submit" class="btn-signup">
                    Register
                </button>

            </form>


            <p class="signup-footer">
                Already registered?
                <a href="{{ route('auth.login') }}">Log in</a>
            </p>

        </div>

    </div>

</body>

</html>