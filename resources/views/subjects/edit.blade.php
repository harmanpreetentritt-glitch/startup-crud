<!DOCTYPE html>
<html>

<head>
    <title>Edit Subject</title>
</head>

<body>

    <h1>Edit Subject</h1>

    <form action="{{ url('/subjects/' . $subject->id) }}" method="POST">

        @csrf
        @method('PUT')

        <label>Subject Name</label>
        <input type="text" name="name" value="{{ old('name', $subject->name) }}">

        @error('name')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <label>Course</label>

        <select name="course_id" required>

            <option value="">Select Course</option>

            @foreach($courses as $course)

                <option value="{{ $course->id }}"
                    {{ $subject->course_id == $course->id ? 'selected' : '' }}>
                    {{ $course->name }}
                </option>

            @endforeach

        </select>

        @error('course_id')
            <span style="color:red;">{{ $message }}</span>
        @enderror

        <br><br>

        <button type="submit">Update Subject</button>

</form>

    <br>

    <a href="{{ url('/subjects') }}">Back to Subjects</a>

</body>

</html>