<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Edit Course</title>

    @vite(['resources/css/edit.css'])
</head>

<body>

    <div class="edit-course-header">

        <div>
            <h1>Edit Course</h1>
            <p>Update course information</p>
        </div>

        <a href="{{ url('/courses') }}" class="back-btn">
            Back to Courses
        </a>

    </div>


    <div class="edit-course-container">

        <form
            action="{{ route('courses.update', $course->id) }}"
            method="POST"
            id="editCourseForm"
            class="edit-course-form"
        >

            @csrf
            @method('PUT')


            <!-- Course Name -->

            <div class="form-group">

                <label for="name">Course Name</label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value="{{ $course->name }}"
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

                    <option value="Online"
                        {{ $course->mode == 'Online' ? 'selected' : '' }}>
                        Online
                    </option>

                    <option value="Offline"
                        {{ $course->mode == 'Offline' ? 'selected' : '' }}>
                        Offline
                    </option>

                    <option value="Hybrid"
                        {{ $course->mode == 'Hybrid' ? 'selected' : '' }}>
                        Hybrid
                    </option>

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
                        value="{{ $course->start_date }}"
                        required
                    >

                </div>


                <div class="form-group">

                    <label for="end_date">End Date</label>

                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        value="{{ $course->end_date }}"
                        required
                    >

                </div>

            </div>


            <!-- Course Duration -->

            <div class="form-group">

                <label for="duration">Course Duration</label>

                <select
                    id="duration"
                    name="duration"
                    required
                >

                    <option value="">Select duration</option>

                    <option value="Hourly"
                        {{ $course->duration == 'Hourly' ? 'selected' : '' }}>
                        Hourly
                    </option>

                    <option value="Weekly"
                        {{ $course->duration == 'Weekly' ? 'selected' : '' }}>
                        Weekly
                    </option>

                    <option value="Monthly"
                        {{ $course->duration == 'Monthly' ? 'selected' : '' }}>
                        Monthly
                    </option>

                    <option value="Quarterly"
                        {{ $course->duration == 'Quarterly' ? 'selected' : '' }}>
                        Quarterly
                    </option>

                    <option value="Half-yearly"
                        {{ $course->duration == 'Half-yearly' ? 'selected' : '' }}>
                        Half-yearly
                    </option>

                    <option value="Yearly"
                        {{ $course->duration == 'Yearly' ? 'selected' : '' }}>
                        Yearly
                    </option>

                </select>

            </div>


            <!-- Length -->

            <div
                class="form-group"
                id="lengthGroup"
                style="{{ $course->duration ? 'display: block;' : 'display: none;' }}"
            >

                <label for="length" id="lengthLabel">
                    Length
                </label>

                <input
                    type="number"
                    id="length"
                    name="length"
                    value="{{ $course->length }}"
                    min="1"
                    required
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
                    Update Course
                </button>

            </div>

        </form>

    </div>


    @vite(['resources/js/edit.js'])

</body>

</html>