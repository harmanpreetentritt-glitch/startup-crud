<!DOCTYPE html>
<html>
<head>
    <title>Add Subject</title>
</head>
<body>

<h1>Add Subject</h1>

<form action="/subjects" method="POST">

    @csrf

    <label>Subject Name</label>
    <input type="text" name="name" value="{{ old('name') }}">

    @error('name')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <label>Course</label>

    <select name="course_id" required>

        <option value="">Select Course</option>

        @foreach($courses as $course)
            <option value="{{ $course->id }}"
                {{ old('course_id') == $course->id ? 'selected' : '' }}>
                {{ $course->name }}
            </option>
        @endforeach

    </select>

    @error('course_id')
        <span style="color:red;">{{ $message }}</span>
    @enderror

    <br><br>

    <button type="submit">Add Subject</button>

</form>
</body>
</html>