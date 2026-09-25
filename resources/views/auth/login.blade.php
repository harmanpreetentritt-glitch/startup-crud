
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Login</title>

    <script src="https://kit.fontawesome.com/e5045e0eb5.js" crossorigin="anonymous"></script>

    @vite(['resources/css/login.css', 'resources/js/login.js'])
</head>

<body>

    <div class="login-page">

        <div class="login-card">

            <!-- Brand -->
            <div class="login-brand">

                <span class="brand-icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                </span>

                <h1>Student Login</h1>

                <p>Login to access your student account.</p>

            </div>


            <!-- Login Form -->
            <form class="login-form" method="POST" action="{{url('/courses')  }}" novalidate>

                @csrf

                <!-- Email -->
                <div class="form-group">

                    <label for="email">Email Address</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                    >

                    <span id="emailError" class="field-error"></span>
                    


                </div>
                 @error('email')
                        <span style="color:red;">{{ $message }}</span>
                    @enderror

                <!-- Password -->
                <div class="form-group">

                    <label for="password">Password</label>

                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        >

                    </div>

                    <span id="passwordError" class="field-error"></span>
                   

                </div>
                    @error('password')
                        <span style="color:red;">{{ $message }}</span>
                    @enderror

                <!-- Login Button -->
                <button type="submit" class="btn-login">
                    Login
                </button>

            </form>


            <!-- Register Link -->
            <p class="login-footer">

                Don't have an account?

                <a href="{{ route('auth.login') }}">
                    Register
                </a>

            </p>

        </div>

    </div>

</body>

</html>





