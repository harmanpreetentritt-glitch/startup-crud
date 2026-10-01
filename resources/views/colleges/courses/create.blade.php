<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Course | {{ $college->name }} | CampusPath</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/college-course.css'])
</head>

<body>

    <header class="course-header">
        <a class="brand" href="/colleges">Campus<span>Path</span></a>
        <a class="back-link" href="/colleges/{{ $college->id }}#college-courses">&#8592; Back to
            {{ $college->name }}</a>
    </header>

    <main class="course-page">
        <section class="course-card">
            <p class="eyebrow">{{ $college->name }}</p>
            <h1>Add a course</h1>
            <p class="intro">Enter the course name and how long it takes to complete.</p>

            <form action="/colleges/{{ $college->id }}/courses" method="POST">
                @csrf
                <div class="field">
                    <label for="name">Course name <span>*</span></label>
                    <input id="name" name="name" type="text" maxlength="100" value="{{ old('name') }}"
                        placeholder="e.g. B.Tech" required>
                    @error('name') <small class="error-text">{{ $message }}</small> @enderror
                </div>

                <div class="field">
                    <label for="degree">Stream</label>
                    <input id="degree" name="stream" type="text" maxlength="255" value="{{ old('degree') }}"
                        placeholder="e.g. Engineering & technology">
                </div>

                <div class="field">
                    <label for="study_mode">Study mode<span>*</span></label>
                    <select id="study_mode" name="study_mode">
                        <option value="">Select mode</option>
                        @foreach(['Regular', 'Full Time', 'Part Time', 'Online', 'Distance', 'Hybrid', 'Offline'] as $mode)
                            <option value="{{ $mode }}" {{ old('study_mode') === $mode ? 'selected' : '' }}>{{ $mode }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <div class="field">
                    <label for="specialization">Specialization</label>
                    <input id="specialization" name="specialization" type="text" maxlength="255"
                        value="{{ old('specialization') }}" placeholder="e.g. AI & ML">
                </div>

                <div class="field">
                    <label for="duration">Duration<span>*</span></label>
                    <input id="duration" name="duration" type="text" maxlength="100" value="{{ old('duration') }}"
                        placeholder="e.g. 4 years" required>
                    @error('duration') <small class="error-text">{{ $message }}</small> @enderror
                    <!-- <small>Examples: “3 years”, “4 years”, or “6 semesters”.</small> -->
                </div>

                <div class="field">
                    <label for="eligibility">Eligibility criteria</label>
                    <textarea id="eligibility" name="eligibility" rows="3" maxlength="5000"
                        placeholder="e.g. 10+2 with Physics, Chemistry, and Mathematics">{{ old('eligibility') }}</textarea>
                    @error('eligibility') <small class="error-text">{{ $message }}</small> @enderror
                </div>

                <div class="field">
                    <label for="exam">Entrance exam</label>
                    <input id="exam" name="exam" type="text" maxlength="255" value="{{ old('exam') }}"
                        placeholder="e.g. JEE Advanced">
                    @error('exam') <small class="error-text">{{ $message }}</small> @enderror
                </div>

                <div class="actions">
                    <a class="cancel-button" href="/colleges/{{ $college->id }}#college-courses">Cancel</a>
                    <button type="submit">Add course <span aria-hidden="true">&#8594;</span></button>
                </div>
            </form>
        </section>
    </main>
</body>

</html>