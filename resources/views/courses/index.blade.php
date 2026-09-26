<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Courses</title>

    @vite(['resources/css/index.css','resources/js/course.js'])
</head>

<body>

    <!-- Header -->

    <div class="courses-header">

        <div class="courses-title">
            <h1>Courses</h1>
            <p>Manage available courses</p>
        </div>

        <a href="{{ url('/courses/create') }}" class="add-course-btn">
            + Add Course
        </a>

    </div>


    <!-- Course Table -->

    <div class="table-container">

        <table class="course-table">

            <thead>
                <tr>
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

                        <!-- Clickable Course -->

                        <td>
                            <button
                                class="course-name"
                                data-course="{{ $course->name }}"
                                data-start="{{ $course->start_date }}"
                                data-end="{{ $course->end_date }}"
                                data-length="{{ $course->length }}"
                                data-duration="{{ $course->duration }}"
                                data-subjects='@json($course->subjects->pluck("name"))'
                            >
                                {{ $course->name }}
                            </button>
                        </td>


                        <td>
                            {{ $course->start_date }}
                        </td>

                        <td>
                            {{ $course->end_date }}
                        </td>

                        <td>
                            {{ $course->length }}
                        </td>

                        <td>
                            {{ $course->duration }}
                        </td>


                        <!-- Actions -->

                        <td class="actions">

                            <a
                                href="{{ route('courses.edit', $course->id) }}"
                                class="edit-btn">
                                Edit
                            </a>

                            <form
                                action="{{ route('courses.destroy', $course->id) }}"
                                method="POST"
                                class="delete-form">

                                @csrf
                                @method('DELETE')

                                <button
                                    type="submit"
                                    class="delete-btn"
                                    onclick="return confirm('Are you sure you want to delete this course?')">
                                    Delete
                                </button>

                            </form>

                        </td>

                    </tr>

                @endforeach

            </tbody>

        </table>

    </div>


    <!-- ================= COURSE MODAL ================= -->

    <div class="course-modal" id="courseModal">

        <div class="modal-content">

            <!-- Modal Header -->

            <div class="modal-header">

                <div>
                    <h2 id="modalCourseName">Course Name</h2>
                    <p>Course Details</p>
                </div>

                <button class="close-modal" id="closeModal">
                    &times;
                </button>

            </div>


            <!-- Course Details -->

            <div class="course-details">

                <div class="detail-item">
                    <span>Start Date</span>
                    <strong id="modalStartDate"></strong>
                </div>

                <div class="detail-item">
                    <span>End Date</span>
                    <strong id="modalEndDate"></strong>
                </div>

                <div class="detail-item">
                    <span>Length</span>
                    <strong id="modalLength"></strong>
                </div>

                <div class="detail-item">
                    <span>Duration</span>
                    <strong id="modalDuration"></strong>
                </div>

            </div>


            <!-- Subjects -->

            <div class="subjects-section">

                <h3>Subjects</h3>

                <div
                    class="subjects-list"
                    id="modalSubjects">
                </div>

            </div>


            <!-- Modal Footer -->

            <div class="modal-footer">

                <button
                    class="close-button"
                    id="closeButton">
                    Close
                </button>

            </div>

        </div>

    </div>

</body>

</html>