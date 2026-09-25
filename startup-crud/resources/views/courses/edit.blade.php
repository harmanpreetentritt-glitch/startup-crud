<!DOCTYPE html>
<html>

<head>
    <title>Edit Course</title>
</head>

<body>

    <h1>Edit Course</h1>

    <form action="{{ url('/courses/' . $course->id) }}" method="POST">

        @csrf
        @method('PUT')

        <label>Course Name</label>
        <input type="text" name="name" value="{{ old('name', $course->name) }}">

        @error('name')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Start Date</label>
        <input type="date" name="start_date"
            value="{{ old('start_date', $course->start_date) }}">

        @error('start_date')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>End Date</label>
        <input type="date" name="end_date"
            value="{{ old('end_date', $course->end_date) }}">

        @error('end_date')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Length</label>
        <input type="text" name="length"
            value="{{ old('length', $course->length) }}">

        @error('length')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Duration</label>
        <input type="text" name="duration"
            value="{{ old('duration', $course->duration) }}">

        @error('duration')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Update Course</button>

    </form>

    <br>

    <a href="{{ url('/courses') }}">Back to Courses</a>

</body>

</html>