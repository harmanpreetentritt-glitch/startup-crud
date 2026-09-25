<!DOCTYPE html>
<html>

<head>
    <title>Add Student</title>
</head>

<body>

    <h1>Add Student</h1>

    <form action="{{ url('/students') }}" method="POST">

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

        <label>Phone:</label>
        <input type="text" name="phone" value="{{ old('phone') }}">

        @error('phone')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Course</label>

        <select name="course_id" required>
            <option value="">Select Course</option>

            @foreach($courses as $course)
                <option value="{{ $course->id }}" {{ old('course_id') == $course->id ? 'selected' : '' }}>
                    {{ $course->name }}
                </option>
            @endforeach
        </select>

        @error('course_id')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Age:</label>
        <input type="number" name="age" value="{{ old('age') }}">

        @error('age')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Save Student</button>
        <a href="{{ url('/students') }}">Cancel</a>

    </form>

</body>

</html>