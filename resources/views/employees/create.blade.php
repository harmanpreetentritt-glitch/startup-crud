<!DOCTYPE html>
<html>
<head>
    <title>Add Employee</title>
</head>
<body>

    <h1>Add Employee</h1>

    <form action="{{ url('/employees') }}" method="POST">

        @csrf

        <label>Name:</label>
        <input type="text" name="employeename" value="{{ old('employeename') }}">

        @error('employeename')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Email:</label>
        <input type="email" name="email" value="{{ old('email') }}">

        @error('email')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Phone:</label>
        <input type="text" name="phone" value="{{ old('phone') }}">

        @error('phone')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Department:</label>
        <input type="text" name="department" value="{{ old('department') }}">

        @error('department')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Designation:</label>
        <input type="text" name="designation" value="{{ old('designation') }}">

        @error('designation')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Salary:</label>
        <input type="number" step="any" name="salary" value="{{ old('salary') }}">

        @error('salary')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Joining Date:</label>
        <input type="date" name="joining_date" value="{{ old('joining_date') }}">

        @error('joining_date')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Save Employee</button>
        <a href="{{ url('/employees') }}">Cancel</a>

    </form>

</body>
</html>