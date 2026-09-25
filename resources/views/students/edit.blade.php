<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
</head>
<body>

    <h1>Edit Student</h1>

    <form action="{{ url('/students/' . $student->id) }}" method="POST">

        @csrf
        @method('PUT')

        <label>Name:</label>
        <input type="text" name="name" value="{{ old('name', $student->name) }}">

        @error('name')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Email:</label>
        <input type="email" name="email" value="{{ old('email', $student->email) }}">

        @error('email')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Phone:</label>
        <input type="text" name="phone" value="{{ old('phone', $student->phone) }}">

        @error('phone')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

    <label>Course</label>

<select name="course_id" required>

    <option value="">Select Course</option>

    @foreach($courses as $course)
        <option value="{{ $course->id }}"
            {{ $student->course_id == $course->id ? 'selected' : '' }}>
            {{ $course->name }}
        </option>
    @endforeach

</select>

@error('course_id')
    <span style="color:red;">{{ $message }}</span>
@enderror

<br><br>

        <br><br>

        <label>Age:</label>
        <input type="number" name="age" value="{{ old('age', $student->age) }}">

        @error('age')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Update Student</button>
        <a href="{{ url('/students') }}">Cancel</a>

    </form>

</body>
</html>