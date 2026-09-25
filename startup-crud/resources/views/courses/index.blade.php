<!DOCTYPE html>
<html>

<head>
    <title>Courses</title>
</head>

<body>

    <h1>Courses</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    @if(session('error'))
        <p style="color: red;">{{ session('error') }}</p>
    @endif

    <a href="{{ url('/courses/create') }}">Add Course</a>

    <br><br>

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Length</th>
                <th>Duration</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>

            @foreach($courses as $course)

                <tr>
                    <td>{{ $course->id }}</td>

                    <td>{{ $course->name }}</td>

                    <td>{{ $course->start_date }}</td>

                    <td>{{ $course->end_date }}</td>

                    <td>{{ $course->length }}</td>

                    <td>{{ $course->duration }}</td>

                    <td>

                        <a href="{{ url('/courses/' . $course->id . '/edit') }}">
                            Edit
                        </a>

                        <form action="{{ url('/courses/' . $course->id) }}"
                              method="POST"
                              style="display:inline; margin-left:5px;">

                            @csrf
                            @method('DELETE')

                            <button type="submit"
                                onclick="return confirm('Are you sure you want to delete this course?')">
                                Delete
                            </button>

                        </form>

                    </td>
                </tr>

            @endforeach

        </tbody>

    </table>

</body>

</html>