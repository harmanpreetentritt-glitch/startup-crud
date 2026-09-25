<!DOCTYPE html>
<html>
<head>
    <title>Employee Management</title>
</head>
<body>

    <h1>Employee Management System</h1>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <a href="{{ url('/employees/create') }}">Add Employee</a>

    <br><br>

    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            @foreach($employees as $employee)
                <tr>
                    <td>{{ $employee->id }}</td>
                    <td>{{ $employee->name }}</td>
                    <td>{{ $employee->email }}</td>
                    <td>{{ $employee->phone }}</td>
                    <td>{{ $employee->department }}</td>
                    <td>{{ $employee->designation }}</td>
                    <td>{{ $employee->salary }}</td>
                    <td>{{ $employee->joining_date }}</td>
                    <td>
                        <a href="{{ url('/employees/' . $employee->id . '/edit') }}">Edit</a>
                        <form action="{{ url('/employees/' . $employee->id) }}" method="POST" style="display:inline; margin-left: 5px;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" onclick="return confirm('Are you sure you want to delete this employee?')">
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