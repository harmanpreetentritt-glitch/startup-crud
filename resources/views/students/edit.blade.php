<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Edit Student</title>

    @vite([
        'resources/css/edit-student.css',
        'resources/js/edit-student.js'
    ])

</head>

<body>

    <!-- Header -->

    <div class="student-header">

        <div class="student-title">

            <h1>Edit Student</h1>

            <p>Update student information</p>

        </div>

        <a href="{{ url('/students') }}" class="back-btn">
            Back to Students
        </a>

    </div>


    <!-- Edit Student -->

    <div class="edit-container">

        <div class="edit-card">

            <div class="card-heading">

                <h2>Student Details</h2>

                <p>Edit the information below and update the student.</p>

            </div>


            <form
                class="student-form"
                action="{{ url('/students/' . $student->id) }}"
                method="POST"
                novalidate
            >

                @csrf
                @method('PUT')


                <!-- Name -->

                <div class="form-group">

                    <label for="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        value="{{ old('name', $student->name) }}"
                        placeholder="Enter student name"
                    >

                    <span id="nameError" class="field-error"></span>

                    @error('name')
                        <span class="field-error">
                            {{ $message }}
                        </span>
                    @enderror

                </div>


                <!-- Email -->

                <div class="form-group">

                    <label for="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value="{{ old('email', $student->email) }}"
                        placeholder="Enter email address"
                    >

                    <span id="emailError" class="field-error"></span>

                    @error('email')
                        <span class="field-error">
                            {{ $message }}
                        </span>
                    @enderror

                </div>


                <!-- Phone -->

                <div class="form-group">

                    <label for="phone">
                        Phone
                    </label>

                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value="{{ old('phone', $student->phone) }}"
                        placeholder="Enter 10-digit phone number"
                    >

                    <span id="phoneError" class="field-error"></span>

                    @error('phone')
                        <span class="field-error">
                            {{ $message }}
                        </span>
                    @enderror

                </div>


                <!-- Course -->

                <div class="form-group">

                    <label for="course_id">
                        Course
                    </label>

                    <select
                        id="course_id"
                        name="course_id"
                    >

                        <option value="">
                            Select Course
                        </option>

                        @foreach($courses as $course)

                            <option
                                value="{{ $course->id }}"
                                {{ $student->course_id == $course->id ? 'selected' : '' }}
                            >
                                {{ $course->name }}
                            </option>

                        @endforeach

                    </select>

                    <span id="courseError" class="field-error"></span>

                    @error('course_id')
                        <span class="field-error">
                            {{ $message }}
                        </span>
                    @enderror

                </div>


                <!-- Age -->

                <div class="form-group">

                    <label for="age">
                        Age
                    </label>

                    <input
                        type="number"
                        id="age"
                        name="age"
                        value="{{ old('age', $student->age) }}"
                        placeholder="Enter age"
                    >

                    <span id="ageError" class="field-error"></span>

                    @error('age')
                        <span class="field-error">
                            {{ $message }}
                        </span>
                    @enderror

                </div>


                <!-- Buttons -->

                <div class="form-actions">

                    <a
                        href="{{ url('/students') }}"
                        class="cancel-btn">
                        Cancel
                    </a>

                    <button
                        type="submit"
                        class="update-btn">
                        Update Student
                    </button>

                </div>

            </form>

        </div>

    </div>

</body>

</html>