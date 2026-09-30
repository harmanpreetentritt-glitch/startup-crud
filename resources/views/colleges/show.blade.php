<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>College profile | CampusPath</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/college-detail.css', 'resources/js/college-detail.js'])
</head>
<body data-college-id="{{ $collegeId }}">
    <header class="site-detail-header">
        <a class="brand" href="/colleges">Campus<span>Path</span></a>
        <nav aria-label="Main navigation">
            <a href="/colleges">Colleges</a>
            <a href="/colleges/create">Add a college</a>
        </nav>
    </header>

    <main class="detail-page">
        @if(session('success'))
            <div class="detail-flash" role="status">{{ session('success') }}</div>
        @endif
        <div id="detailMessage" class="detail-message">Loading college details…</div>
        <article id="collegeDetails" hidden>
            <section class="detail-hero">
                <div class="hero-inner">
                    <div id="collegeLogo" class="detail-logo"></div>
                    <div class="hero-copy">
                        <p class="eyebrow">CAMPUSPATH COLLEGE PROFILE</p>
                        <h1 id="collegeName"></h1>
                        <div class="hero-meta">
                            <span id="collegeLocation" class="location"></span>
                            <span id="collegeType" class="type-badge"></span>
                        </div>
                        <p id="heroDescription" class="hero-description"></p>
                        <div class="hero-actions">
                            <a id="heroWebsite" class="hero-primary" href="#" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">&#8599;</span></a>
                            <a class="hero-secondary" href="#college-info">College information</a>
                        </div>
                    </div>
                </div>
            </section>

            <nav class="section-nav" aria-label="College page sections">
                <a class="active" href="#overview">Overview</a>
                <a href="#college-courses">Courses</a>
                <a href="#college-info">College information</a>
            </nav>

            <section id="overview" class="detail-section overview-section">
                <div class="section-byline"><span class="byline-avatar" aria-hidden="true">CP</span><div><strong>CampusPath College Directory</strong><small>College profile</small></div></div>
                <h2><span id="overviewTitle"></span> Overview</h2>
                <p id="collegeDescription" class="description"></p>
            </section>

            <section id="college-info" class="detail-section information-section">
                <h2>College information</h2>
                <div class="table-wrap">
                    <table class="info-table">
                        <tbody>
                            <tr><th scope="row">College name</th><td id="tableCollegeName"></td></tr>
                            <tr><th scope="row">Established</th><td id="collegeYear"></td></tr>
                            <tr><th scope="row">Institute type</th><td id="tableCollegeType"></td></tr>
                            <tr><th scope="row">City</th><td id="collegeCity"></td></tr>
                            <tr><th scope="row">State</th><td id="collegeState"></td></tr>
                            <tr><th scope="row">Website</th><td id="collegeWebsite"></td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="college-courses" class="detail-section courses-section">
                <div class="courses-heading">
                    <div>
                        <p class="eyebrow">ACADEMIC PROGRAMS</p>
                        <h2>Courses offered</h2>
                    </div>
                    <a id="addCollegeCourse" class="hero-primary" href="#">+ Add course</a>
                </div>
                <div id="collegeCourses" class="college-courses" aria-live="polite">
                    <p class="courses-loading">Loading courses…</p>
                </div>
            </section>

            <div class="detail-actions">
                <a id="editCollege" class="primary-button" href="#">Edit college</a>
                <a class="secondary-button" href="/colleges">Back to colleges</a>
            </div>
        </article>
    </main>
</body>
</html>
