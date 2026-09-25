<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Add Course</title>

    @vite(['resources/css/create.css'])
</head>

<body>

    <div class="add-course-header">

        <div>
            <h1>Add Course</h1>
            <p>Create a new course</p>
        </div>

        <a href="{{ url('/courses') }}" class="back-btn">
            Back to Courses
        </a>

    </div>


    <div class="add-course-container">

        <form
            action="{{ url('/courses') }}"
            method="POST"
            id="addCourseForm"
            class="add-course-form"
        >

            @csrf


            <!-- Course Name -->

            <div class="form-group">

                <label for="name">Course Name</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter course name"
                    required
                >

            </div>


            <!-- Mode of Course -->

            <div class="form-group">

                <label for="mode">Mode of Course</label>

                <select
                    id="mode"
                    name="mode"
                    required
                >

                    <option value="">Select mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>

                </select>

            </div>


            <!-- Dates -->

            <div class="form-row">

                <div class="form-group">

                    <label for="start_date">Start Date</label>

                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        required
                    >

                </div>


                <div class="form-group">

                    <label for="end_date">End Date</label>

                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        required
                    >

                </div>

            </div>


            <!-- Duration -->

            <div class="form-group">

                <label for="duration">Course Duration</label>

                <select
                    id="duration"
                    name="duration"
                    required
                >

                    <option value="">Select duration</option>

                    <option value="Hourly">Hourly</option>

                    <option value="Weekly">Weekly</option>

                    <option value="Monthly">Monthly</option>

                    <option value="Quarterly">Quarterly</option>

                    <option value="Half-yearly">Half-yearly</option>

                    <option value="Yearly">Yearly</option>

                </select>

            </div>


            <!-- Length -->

            <div
                class="form-group"
                id="lengthGroup"
                style="display: none;"
            >

                <label for="length" id="lengthLabel">
                    Length
                </label>

                <input
                    type="number"
                    id="length"
                    name="length"
                    min="1"
                    placeholder="Enter length"
                >

            </div>


            <!-- Buttons -->

            <div class="form-actions">

                <a
                    href="{{ url('/courses') }}"
                    class="cancel-btn"
                >
                    Cancel
                </a>

                <button
                    type="submit"
                    class="add-btn"
                >
                    Add Course
                </button>

            </div>

        </form>

    </div>


    @vite(['resources/js/create.js'])

</body>

</html>