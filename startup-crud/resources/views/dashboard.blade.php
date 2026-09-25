<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

    <h1>Welcome to Dashboard</h1>

    <p>Hello, {{ Auth::user()->name }}</p>

    <p>You are successfully logged in.</p>

    <a href="/employees">Employee Management</a>
    <a href="/logout">Logout</a>

</body>
</html>