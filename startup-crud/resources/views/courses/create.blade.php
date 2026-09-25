<!DOCTYPE html>
<html>
<head>
    <title>Add Course</title>
</head>
<body>

<h1>Add Course</h1>

<form action="/courses" method="POST">

    @csrf

    <label>Course Name</label>
    <input type="text" name="name" value="{{ old('name') }}">

    @error('name')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <label>Start Date</label>
    <input type="date" name="start_date" value="{{ old('start_date') }}">

    @error('start_date')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <label>End Date</label>
    <input type="date" name="end_date" value="{{ old('end_date') }}">

    @error('end_date')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <label>Length</label>
    <input type="text" name="length" value="{{ old('length') }}" placeholder="Example: 6 Months">

    @error('length')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <label>Duration</label>
    <input type="text" name="duration" value="{{ old('duration') }}" placeholder="Example: 2 Hours">

    @error('duration')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <button type="submit">Add Course</button>

</form>

</body>
</html>