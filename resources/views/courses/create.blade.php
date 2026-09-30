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

            <div class="form-group">
                <label for="college_id">College</label>
                <select id="college_id" name="college_id" required>
                    <option value="">Select college</option>
                    @foreach($colleges as $college)
                        <option value="{{ $college->id }}" {{ (string) old('college_id', $selectedCollegeId ?? '') === (string) $college->id ? 'selected' : '' }}>{{ $college->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="degree">Degree</label>
                <input id="degree" name="degree" type="text" maxlength="255" value="{{ old('degree') }}" placeholder="e.g. B.Tech">
            </div>

            <div class="form-group">
                <label for="study_mode">Study Mode</label>
                <select id="study_mode" name="study_mode">
                    <option value="">Select mode</option>
                    @foreach(['Regular', 'Full Time', 'Part Time', 'Online', 'Distance', 'Hybrid', 'Offline'] as $mode)
                        <option value="{{ $mode }}" {{ old('study_mode') === $mode ? 'selected' : '' }}>{{ $mode }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="specialization">Specialization</label>
                <input id="specialization" name="specialization" type="text" maxlength="255" value="{{ old('specialization') }}" placeholder="e.g. Computer Science">
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

            <div class="form-group">
                <label for="eligibility">Eligibility criteria</label>
                <textarea id="eligibility" name="eligibility" rows="3" maxlength="5000" placeholder="Enter the course eligibility criteria">{{ old('eligibility') }}</textarea>
            </div>

            <div class="form-group">
                <label for="exam_required">Entrance exam</label>
                <input id="exam_required" name="exam_required" type="text" maxlength="255" value="{{ old('exam_required') }}" placeholder="e.g. JEE Advanced">
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
