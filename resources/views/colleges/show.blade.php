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

    <!-- HEADER (navy, hover mega menus from partials) -->
    <header class="site-detail-header">
        <div class="detail-header-inner">

            <a class="brand" href="/colleges">Campus<span>Path</span></a>

            <nav aria-label="Main navigation">

                <div class="colleges-menu-item">
                    <a href="/colleges" aria-haspopup="true">Colleges <span class="detail-nav-chevron"
                            aria-hidden="true"></span></a>
                    @include('colleges.partials.popular-colleges-menu')
                </div>

                <div class="exams-menu-item">
                    <a href="/colleges#filter-box-exam" aria-haspopup="true">Exams <span class="detail-nav-chevron"
                            aria-hidden="true"></span></a>
                    @include('colleges.partials.popular-exams-menu')
                </div>

                <div class="courses-menu-item">
                    <a href="/courses" aria-haspopup="true">Courses <span class="detail-nav-chevron"
                            aria-hidden="true"></span></a>
                    @include('colleges.partials.popular-courses-menu')
                </div>

                <div class="careers-menu-item">
                    <button type="button" class="careers-menu-trigger" aria-haspopup="true">Careers <span
                            class="detail-nav-chevron" aria-hidden="true"></span></button>
                    @include('colleges.partials.popular-careers-menu')
                </div>

            </nav>
        </div>
    </header>

    <main class="detail-page">

        @if(session('success'))
            <div class="detail-flash" role="status">{{ session('success') }}</div>
        @endif

        <div id="detailMessage" class="detail-message">Loading college details…</div>

        <article id="collegeDetails" hidden>

            <!-- HERO -->
            <section class="detail-hero" id="profile">
                <div class="hero-top">
                    <div id="collegeLogo" class="detail-logo" aria-hidden="true"></div>
                    <div class="hero-icons">
                        <button type="button" class="icon-btn" id="helpBtn" title="Help" aria-label="Help">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" />
                                <circle cx="12" cy="17" r=".6" fill="currentColor" />
                            </svg>
                        </button>
                        <i></i>
                        <button type="button" class="icon-btn" id="saveBtn" title="Save college"
                            aria-label="Save college" aria-pressed="false">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linejoin="round">
                                <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                            </svg>
                        </button>
                        <i></i>
                        <button type="button" class="icon-btn" id="compareBtn" title="Add to compare"
                            aria-label="Add to compare" aria-pressed="false">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linejoin="round">
                                <rect x="3" y="4" width="7" height="16" rx="1.5" />
                                <rect x="14" y="4" width="7" height="16" rx="1.5" />
                            </svg>
                            <span class="icon-badge" id="compareBadge" hidden>0</span>
                        </button>
                    </div>
                </div>

                <h1><span id="collegeName"></span> Admission 2026 - Courses, Facilities &amp; Details</h1>

                <div class="hero-badges">
                    <p id="collegeRating" class="rating-pill" hidden></p>
                    <span id="collegeType" class="type-badge"></span>
                </div>

                <div class="hero-meta">
                    <span class="location"><span aria-hidden="true">📍</span> <span id="collegeLocation"></span></span>
                </div>

                <div class="hero-actions">
                    <a class="hero-secondary" href="#college-courses">View courses</a>
                    <a id="heroWebsite" class="hero-primary" href="#" target="_blank" rel="noopener noreferrer"
                        hidden>Official website</a>
                </div>
            </section>

            <!-- SECTION NAV (sticky) -->
            <nav class="section-nav" aria-label="College page sections">
                <a class="active" href="#overview">Overview</a>
                <a href="#admission">Admission</a>
                <a href="#college-courses">Courses</a>
                <a href="#facilities">Facilities</a>
                <a href="#college-info">Details</a>
            </nav>

            <!-- BYLINE -->
            <div class="section-byline">
                <span class="byline-avatar" aria-hidden="true">👤</span>
                <div>
                    <p>Written By <a href="/colleges">CampusPath College Directory</a></p>
                    <small>College profile</small>
                </div>
            </div>

            <!-- OVERVIEW -->
            <section id="overview" class="detail-section overview-section">
                <h2><span id="overviewTitle"></span> Overview</h2>

                <div class="clamp" id="descriptionClamp">
                    <p id="collegeDescription" class="description"></p>
                </div>
                <button type="button" class="read-more" id="readMore" hidden>Read More ⌄</button>

                <h2><span id="highlightsTitle"></span> Highlights</h2>
                <p class="section-copy">Some of the major highlights of this college can be checked below:</p>

                <div class="table-wrap">
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th scope="col">Particulars</th>
                                <th scope="col">Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Established</td>
                                <td id="overviewYear">—</td>
                            </tr>
                            <tr>
                                <td>Institute Type</td>
                                <td id="overviewType">—</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td id="overviewCity">—</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td id="overviewState">—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- ADMISSION -->
            <section id="admission" class="detail-section admission-section">
                <h2><span id="admissionTitle"></span> Admission</h2>

                <div class="admission-update">
                    <strong>Admission information</strong>
                    <p id="admissionNotice">Admission dates and eligibility are not available in this profile. Check the
                        college website for current requirements.</p>
                </div>

                <h3>Admission process</h3>
                <p id="admissionProcess">Review the course options, confirm the latest requirements with the college,
                    and apply through its official admission channel.</p>

                <h3>Eligibility criteria</h3>
                <p class="section-copy">Course-specific eligibility and entrance exam details are shown when provided by
                    the college.</p>

                <div id="admissionEligibility" class="table-wrap">
                    <p class="courses-loading">Loading course eligibility…</p>
                </div>
            </section>

            <!-- COURSES -->
            <section id="college-courses" class="detail-section courses-section">
                <div class="courses-heading">
                    <h2>Courses and programme details</h2>
                    <a id="addCollegeCourse" class="hero-primary" href="#">+ Add course</a>
                </div>

                <div id="collegeCourses" class="college-courses" aria-live="polite">
                    <p class="courses-loading">Loading courses…</p>
                </div>

                <div id="courseChips" class="chips-box" hidden></div>
            </section>

            <!-- FACILITIES -->
            <section id="facilities" class="detail-section facilities-section">
                <h2>Facilities &amp; Hostel</h2>

                <div class="facility-grid">
                    <div class="facility-card">
                        <div class="facility-icon">🏠</div>
                        <div>
                            <h3>Hostel Facilities</h3>
                            <p id="hostelFacilities">Not provided</p>
                        </div>
                    </div>

                    <div class="facility-card">
                        <div class="facility-icon">₹</div>
                        <div>
                            <h3>Hostel Fee</h3>
                            <p id="hostelFee">Not provided</p>
                        </div>
                    </div>

                    <div class="facility-card facility-card-wide">
                        <div class="facility-icon">★</div>
                        <div>
                            <h3>Campus Facilities</h3>
                            <div id="collegeFacilities" class="facility-tags">
                                <span class="facility-empty">Not provided</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- COLLEGE DETAILS -->
            <section id="college-info" class="detail-section information-section">
                <h2>College details</h2>
                <div class="table-wrap">
                    <table class="info-table">
                        <tbody>
                            <tr>
                                <th scope="row">College name</th>
                                <td id="tableCollegeName"></td>
                            </tr>
                            <tr>
                                <th scope="row">Established</th>
                                <td id="collegeYear"></td>
                            </tr>
                            <tr>
                                <th scope="row">Institute type</th>
                                <td id="tableCollegeType"></td>
                            </tr>
                            <tr>
                                <th scope="row">City</th>
                                <td id="collegeCity"></td>
                            </tr>
                            <tr>
                                <th scope="row">State</th>
                                <td id="collegeState"></td>
                            </tr>
                            <tr>
                                <th scope="row">Website</th>
                                <td id="collegeWebsite"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- ACTIONS -->
            <div class="detail-actions">
                <a id="editCollege" class="primary-button" href="#">Edit college</a>
                <a class="secondary-button" href="/colleges">Back to colleges</a>
            </div>

        </article>
    </main>

    <!-- COMPARE TRAY -->
    <div class="compare-tray" id="compareTray" hidden>
        <strong>Compare colleges</strong>
        <div class="compare-items" id="compareItems"></div>
        <button type="button" class="secondary-button" id="compareClear">Clear</button>
        <button type="button" class="primary-button" id="compareNow">Compare now</button>
    </div>

    <!-- HELP MODAL -->
    <div class="modal" id="helpModal" hidden>
        <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="helpTitle">
            <button type="button" class="modal-close" data-close aria-label="Close">✕</button>
            <h2 id="helpTitle">Need help?</h2>
            <ul class="help-list">
                <li><b>♡ Save</b> keeps this college in your saved list on this device.</li>
                <li><b>Compare</b> adds up to 3 colleges so you can see them side by side.</li>
                <li><b>Eligibility &amp; admission</b> details are in the Admission section below.</li>
            </ul>
            <div class="modal-actions">
                <a class="primary-button" href="#admission" data-close>Go to admission</a>
                <a class="secondary-button" href="/colleges">Browse colleges</a>
            </div>
        </div>
    </div>

    <!-- COMPARE MODAL -->
    <div class="modal" id="compareModal" hidden>
        <div class="modal-box modal-wide" role="dialog" aria-modal="true" aria-labelledby="compareTitle">
            <button type="button" class="modal-close" data-close aria-label="Close">✕</button>
            <h2 id="compareTitle">Compare colleges</h2>
            <div class="table-wrap" id="compareTable">
                <p class="courses-loading">Loading…</p>
            </div>
        </div>
    </div>

    <button type="button" id="backToTop" class="back-to-top" aria-label="Back to top" hidden><span>⌃⌃</span>TOP</button>

</body>

</html>