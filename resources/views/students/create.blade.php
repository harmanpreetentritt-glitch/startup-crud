<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Add Student</title>

    @vite(['resources/css/create-student.css'])

</head>

<body>

    <!-- Header -->

    <div class="student-header">

        <div class="header-content">

            <h1>Add Student</h1>
            <p>Add a new student to the system</p>

        </div>

        <a href="{{ url('/students') }}" class="back-btn">
            Back to Students
        </a>

    </div>


    <!-- Form Container -->

    <div class="form-container">

        <div class="form-card">

            <div class="form-title">

                <h2>Student Details</h2>

                <p>Enter the student's information below.</p>

            </div>


            <form
                action="{{ url('/students') }}"
                method="POST"
                class="student-form"
                novalidate
            >

                @csrf


                <!-- Name -->

                <div class="form-group">

                    <label for="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        value="{{ old('name') }}"
                        placeholder="Enter student name"
                    >

                    <span id="nameError" class="field-error"></span>

                    @error('name')
                        <span class="field-error">{{ $message }}</span>
                    @enderror

                </div>


                <!-- Email -->

                <div class="form-group">

                    <label for="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value="{{ old('email') }}"
                        placeholder="Enter student email"
                    >

                    <span id="emailError" class="field-error"></span>

                    @error('email')
                        <span class="field-error">{{ $message }}</span>
                    @enderror

                </div>


                <!-- Phone -->

                <div class="form-group">

                    <label for="phone">Phone</label>

                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value="{{ old('phone') }}"
                        placeholder="Enter phone number"
                    >

                    <span id="phoneError" class="field-error"></span>

                    @error('phone')
                        <span class="field-error">{{ $message }}</span>
                    @enderror

                </div>


                <!-- Course -->

                <div class="form-group">

                    <label for="course_id">Course</label>

                    <select name="course_id" id="course_id" required>

                        <option value="">Select Course</option>

                        @foreach($courses as $course)

                            <option
                                value="{{ $course->id }}"
                                {{ old('course_id') == $course->id ? 'selected' : '' }}
                            >
                                {{ $course->name }}
                            </option>

                        @endforeach

                    </select>

                    <span id="courseError" class="field-error"></span>

                    @error('course_id')
                        <span class="field-error">{{ $message }}</span>
                    @enderror

                </div>


                <!-- Age -->

                <div class="form-group">

                    <label for="age">Age</label>

                    <input
                        type="number"
                        id="age"
                        name="age"
                        value="{{ old('age') }}"
                        placeholder="Enter student age"
                    >

                    <span id="ageError" class="field-error"></span>

                    @error('age')
                        <span class="field-error">{{ $message }}</span>
                    @enderror

                </div>


                <!-- Buttons -->

                <div class="form-actions">

                    <a
                        href="{{ url('/students') }}"
                        class="cancel-btn"
                    >
                        Cancel
                    </a>

                    <button
                        type="submit"
                        class="add-btn"
                    >
                        Save Student
                    </button>

                </div>

            </form>

        </div>

    </div>


    @vite(['resources/js/create-student.js'])

</body>

</html>