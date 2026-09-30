<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Add a College | CampusPath</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/college-form.css', 'resources/js/college-form.js'])
</head>
<body data-college-id="{{ $collegeId ?? '' }}">
    <header class="form-header">
        <a class="brand" href="/colleges">Campus<span>Path</span></a>
        <a class="back-link" href="/colleges">&#8592; Back to colleges</a>
    </header>

    <main class="form-page">
        <section class="form-card">
            <aside class="form-side">
                <div class="side-mark" aria-hidden="true">CP</div>
                <p class="side-kicker">CAMPUSPATH DIRECTORY</p>
                <h2 id="sideTitle">Every great campus has a story.</h2>
                <p id="sideDescription">Add a college to help students discover where their next chapter could begin.</p>
                <div class="side-note"><span aria-hidden="true">&#10022;</span> Share accurate, up-to-date details</div>
            </aside>

            <div class="form-content">
                <div class="form-heading">
                    <p class="eyebrow" id="formEyebrow">COLLEGE DETAILS</p>
                    <h1 id="formTitle">Add a college</h1>
                    <p>Fill in the information below. Fields marked <span class="required-mark">*</span> are required.</p>
                </div>

                <div id="formMessage" class="form-message" role="status" aria-live="polite" hidden></div>

                <form id="collegeForm">
                    <div class="field-grid">
                        <div class="field field-wide">
                            <label for="name">College name <span>*</span></label>
                            <input id="name" name="name" type="text" maxlength="255" required autocomplete="organization" placeholder="e.g. Example University">
                        </div>

                        <div class="field">
                            <label for="city">City <span>*</span></label>
                            <input id="city" name="city" type="text" maxlength="100" required autocomplete="address-level2" placeholder="e.g. Pune">
                        </div>

                        <div class="field">
                            <label for="state">State <span>*</span></label>
                            <input id="state" name="state" type="text" maxlength="100" required autocomplete="address-level1" placeholder="e.g. Maharashtra">
                        </div>

                        <div class="field">
                            <label for="type">Institute type</label>
                            <select id="type" name="type">
                                <option value="">Select type</option>
                                <option value="Public">Public</option>
                                <option value="Private">Private</option>
                                <option value="Deemed">Deemed</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="field">
                            <label for="established_year">Established year</label>
                            <input id="established_year" name="established_year" type="number" min="1800" max="{{ date('Y') }}" step="1" placeholder="e.g. 1995">
                        </div>

                        <div class="field">
                            <label for="hostel_facilities">Hostel facilities</label>
                            <input id="hostel_facilities" name="hostel_facilities" type="text" maxlength="2000" placeholder="Boys Hostel, Girls Hostel">
                            <small>Separate multiple facilities with commas.</small>
                        </div>

                        <div class="field">
                            <label for="hostel_fee">Annual hostel fee</label>
                            <input id="hostel_fee" name="hostel_fee" type="number" min="0" step="0.01" placeholder="e.g. 85000">
                        </div>

                        <div class="field field-wide">
                            <label for="facilities">Campus facilities</label>
                            <input id="facilities" name="facilities" type="text" maxlength="4000" placeholder="Library, Laboratories, Sports Facilities">
                            <small>Separate multiple facilities with commas.</small>
                        </div>

                        <div class="field field-wide">
                            <label for="website">Website</label>
                            <input id="website" name="website" type="url" maxlength="255" placeholder="https://www.example.edu">
                        </div>

                        <div class="field field-wide">
                            <label for="logo">Logo image URL</label>
                            <input id="logo" name="logo" type="url" maxlength="255" placeholder="https://www.example.edu/logo.png">
                            <small>Paste a public image URL. Image file uploads are not enabled yet.</small>
                        </div>

                        <div class="field field-wide">
                            <label for="description">Description</label>
                            <textarea id="description" name="description" rows="5" placeholder="A short introduction to the college"></textarea>
                        </div>
                    </div>

                    <div class="form-actions">
                        <a class="cancel-button" href="/colleges">Cancel</a>
                        <button id="submitButton" type="submit"><span id="submitLabel">Add college</span><span aria-hidden="true">&#8594;</span></button>
                    </div>
                </form>
            </div>
        </section>
    </main>
</body>
</html>

