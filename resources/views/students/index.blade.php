<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Students</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    @vite(['resources/css/student-index.css'])

</head>

<body>

    <!-- HEADER -->

    <header class="top-bar">

        <div class="logo">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Student Management System</span>
        </div>

        <a href="{{ url('/dashboard') }}" class="dashboard-link">
            <i class="fa-solid fa-chart-line"></i>
            Dashboard
        </a>

    </header>


    <!-- MAIN -->

    <main class="container">


        <!-- PAGE TOP -->

        <div class="page-top">

            <div>

                <h1>Students</h1>

                <p>
                    Student Records
                    <span class="separator">•</span>
                    Manage all registered students
                </p>

            </div>


            <a href="{{ url('/students/create') }}" class="add-student">

                <i class="fa-solid fa-plus"></i>

                Add Student

            </a>

        </div>


        <!-- SUCCESS MESSAGE -->

        @if(session('success'))

            <div class="success-message">

                <i class="fa-solid fa-circle-check"></i>

                {{ session('success') }}

            </div>

        @endif


        <!-- TABLE SECTION -->

        <div class="records-section">


            <!-- TABLE TOOLBAR -->

            <div class="toolbar">

                <div class="record-title">

                    <h2>All Students</h2>
<!-- 
                    <span class="student-count">
                        {{ $students->count() }}
                    </span> -->

                </div>


                <div class="search-box">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input type="search" id="studentSearch" placeholder="Search students...">

                </div>

            </div>


            <!-- TABLE -->

            <div class="table-wrapper">

                <table id="studentTable">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Student</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Course</th>

                            <th>Age</th>

                            <th>Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        @foreach($students as $student)

                            <tr>

                                <!-- ID -->

                                <td class="id-column">
                                    {{ $student->id }}
                                </td>


                                <!-- STUDENT -->

                                <td>

                                    <div class="student-info">

                                        <div class="avatar">
                                            {{ strtoupper(substr($student->name, 0, 1)) }}
                                        </div>

                                        <span>
                                            {{ $student->name }}
                                        </span>

                                    </div>

                                </td>


                                <!-- EMAIL -->

                                <td>

                                    <span class="email">

                                        <i class="fa-regular fa-envelope"></i>

                                        {{ $student->email }}

                                    </span>

                                </td>


                                <!-- PHONE -->

                                <td>

                                    <span class="phone">

                                        <i class="fa-solid fa-phone"></i>

                                        {{ $student->phone }}

                                    </span>

                                </td>


                                <!-- COURSE -->

                                <td>

                                    @if($student->course)

                                        <div class="course">

                                            <i class="fa-solid fa-book"></i>

                                            <span>
                                                {{ $student->course->name }}
                                            </span>

                                        </div>

                                    @else

                                        <span class="no-course">
                                            No Course
                                        </span>

                                    @endif

                                </td>


                                <!-- AGE -->

                                <td>

                                    <span class="age">
                                        {{ $student->age }}
                                    </span>

                                </td>


                                <!-- ACTION -->

                                <td>

                                    <div class="actions">

                                        <a href="{{ url('/students/' . $student->id . '/edit') }}" class="action-btn edit"
                                            title="Edit Student">

                                            <i class="fa-solid fa-pen"></i>

                                        </a>


                                        <form action="{{ url('/students/' . $student->id) }}" method="POST">

                                            @csrf

                                            @method('DELETE')

                                            <button type="submit" class="action-btn delete" title="Delete Student"
                                                onclick="return confirm('Are you sure you want to delete this student?')">

                                                <i class="fa-solid fa-trash"></i>

                                            </button>

                                        </form>

                                    </div>

                                </td>

                            </tr>

                        @endforeach


                        <!-- NO RESULT -->

                        <tr id="noResults" style="display: none;">

                            <td colspan="7">

                                <div class="no-results">

                                    <i class="fa-solid fa-user-slash"></i>

                                    <p>No students found</p>

                                </div>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    </main>


    @vite(['resources/js/student-index.js'])

</body>

</html>