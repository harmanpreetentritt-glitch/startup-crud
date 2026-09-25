<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

    <h1>Login</h1>

    <form action="/login" method="POST">
        @csrf

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

        <button type="submit">Login</button>
    </form>

    <br>

    <a href="/signup">Create an account</a>

</body>
</html>
