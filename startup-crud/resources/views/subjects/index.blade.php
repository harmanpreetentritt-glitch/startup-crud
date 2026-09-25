<!DOCTYPE html>
<html>

<head>
    <title>Subjects</title>
</head>

<body>

    <h1>Subjects</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <a href="{{ url('/subjects/create') }}">Add Subject</a>

    <br><br>

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>ID</th>
                <th>Subject Name</th>
                <th>Course</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>

            @foreach($subjects as $subject)

                <tr>

                    <td>{{ $subject->id }}</td>

                    <td>{{ $subject->name }}</td>

                    <td>
                        @if($subject->course)
                            {{ $subject->course->name }}
                        @else
                            No Course
                        @endif
                    </td>

                    <td>

                        <a href="{{ url('/subjects/' . $subject->id . '/edit') }}">
                            Edit
                        </a>

                        <form action="{{ url('/subjects/' . $subject->id) }}" method="POST"
                            style="display:inline; margin-left: 5px;">

                            @csrf
                            @method('DELETE')

                            <button type="submit"
                                onclick="return confirm('Are you sure you want to delete this subject?')">
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