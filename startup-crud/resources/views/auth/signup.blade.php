<!DOCTYPE html>
<html>

<head>
    <title>Signup</title>
</head>

<body>

    <h1>Create Account</h1>

    <form action="/signup" method="POST">

        @csrf

        <label>Name:</label>
        <input type="text" name="name" value="{{ old('name') }}">

        @error('name')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Email:</label>
        <input type="email" name="email" value="{{ old('email') }}">

        @error('email')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Password:</label>
        <input type="password" name="password">

        @error('password')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Sign Up</button>

    </form>

</body>

</html>