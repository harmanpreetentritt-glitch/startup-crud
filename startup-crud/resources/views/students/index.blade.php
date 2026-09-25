<!DOCTYPE html>
<html>

<head>
    <title>Student Management</title>
</head>

<body>

    <h1>Student Management System</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    @if(session('error'))
        <p style="color: red;">{{ session('error') }}</p>
    @endif

    <a href="{{ url('/students/create') }}">Add Student</a>

    <br><br>

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course ID</th>
                <th>Course</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Length</th>
                <th>Duration</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>

            @foreach($students as $student)

                <tr>

                    <td>{{ $student->id }}</td>

                    <td>{{ $student->name }}</td>

                    <td>{{ $student->email }}</td>

                    <td>{{ $student->phone }}</td>

                    <td>
                        @if($student->course)
                            {{ $student->course->id }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>
                        @if($student->course)
                            <strong>{{ $student->course->name }}</strong>

                            <ul>
                                @foreach($student->course->subjects as $subject)
                                    <li>{{ $subject->name }}</li>
                                @endforeach
                            </ul>

                        @else
                            No Course
                        @endif
                    </td>

                    <td>
                        @if($student->course)
                            {{ $student->course->start_date }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>
                        @if($student->course)
                            {{ $student->course->end_date }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>
                        @if($student->course)
                            {{ $student->course->length }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>
                        @if($student->course)
                            {{ $student->course->duration }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>{{ $student->age }}</td>

                    <td>

                        <a href="{{ url('/students/' . $student->id . '/edit') }}">
                            Edit
                        </a>

                        <form action="{{ url('/students/' . $student->id) }}"
                              method="POST"
                              style="display:inline; margin-left:5px;">

                            @csrf
                            @method('DELETE')

                            <button type="submit"
                                onclick="return confirm('Are you sure you want to delete this student?')">
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