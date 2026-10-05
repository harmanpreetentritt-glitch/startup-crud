const collegeId = document.body.dataset.collegeId;

const detailMessage = document.querySelector('#detailMessage');
const detailCard = document.querySelector('#collegeDetails');

/* HELPERS*/

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    }[character]));
}

function setText(id, value, fallback = 'Not provided') {
    const element = document.querySelector(id);

    if (element) {
        element.textContent = value || fallback;
    }
}

function formatMoney(value) {
    if (value === null || value === undefined || value === '') {
        return 'Not provided';
    }

    const number = Number(String(value).replace(/,/g, ''));

    if (!Number.isFinite(number)) {
        return String(value);
    }

    return `₹${number.toLocaleString('en-IN')}`;
}

function splitValues(value) {
    if (Array.isArray(value)) {
        return value.flatMap(item => splitValues(item)).filter(Boolean);
    }

    if (value === null || value === undefined) {
        return [];
    }

    return String(value)
        .split(/[,;\n]+/)
        .map(item => item.trim())
        .filter(Boolean);
}

function renderFacilities(value) {
    const container = document.querySelector('#collegeFacilities');

    if (!container) {
        return;
    }

    const facilities = splitValues(value);

    if (!facilities.length) {
        container.innerHTML = '<span class="facility-empty">Not provided</span>';
        return;
    }

    container.innerHTML = facilities
        .map(facility => `<span class="facility-tag">${escapeHtml(facility)}</span>`)
        .join('');
}

/* =========================================
   PAGE BEHAVIOUR (Read More, tabs, TOP)
========================================= */

function setupReadMore() {
    const clamp = document.querySelector('#descriptionClamp');
    const button = document.querySelector('#readMore');

    if (!clamp || !button) {
        return;
    }

    if (clamp.scrollHeight > clamp.clientHeight + 4) {
        clamp.classList.add('is-clamped');
        button.hidden = false;
    }

    button.addEventListener('click', () => {
        const open = clamp.classList.toggle('open');
        button.textContent = open ? 'Read Less ⌃' : 'Read More ⌄';
    });
}

function setupSectionNav() {
    const links = [...document.querySelectorAll('.section-nav a')];

    const sections = links
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    function update() {
        const offset = window.scrollY + 120;
        let current = sections[0];

        sections.forEach(section => {
            if (section.offsetTop <= offset) {
                current = section;
            }
        });

        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current?.id}`);
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

function setupBackToTop() {
    const button = document.querySelector('#backToTop');

    if (!button) {
        return;
    }

    window.addEventListener('scroll', () => {
        button.hidden = window.scrollY < 400;
    }, { passive: true });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}



/* =========================================
   HERO ICON ACTIONS (help / save / compare)
========================================= */

const STORE_SAVED = 'campuspath_saved';
const STORE_COMPARE = 'campuspath_compare';
const MAX_COMPARE = 3;

function readStore(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return Array.isArray(value) ? value : [];
    } catch (error) {
        return [];
    }
}

function writeStore(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        /* storage blocked: actions still work for this visit */
    }
}

function shake(element) {
    if (!element) {
        return;
    }

    element.classList.remove('shake');
    void element.offsetWidth; /* restart animation */
    element.classList.add('shake');
}

function openModal(modal) {
    if (modal) {
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => { modal.hidden = true; });
    document.body.style.overflow = '';
}

function setupModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal || event.target.closest('[data-close]')) {
                closeModals();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModals();
        }
    });
}

async function renderCompareTable(items) {
    const target = document.querySelector('#compareTable');
    target.innerHTML = '<p class="courses-loading">Loading…</p>';

    const loaded = await Promise.all(items.map(async (item) => {
        try {
            const [collegeRes, coursesRes] = await Promise.all([
                fetch(`/api/colleges/${encodeURIComponent(item.id)}`, { headers: { Accept: 'application/json' } }),
                fetch(`/api/colleges/${encodeURIComponent(item.id)}/courses`, { headers: { Accept: 'application/json' } }),
            ]);

            const college = (await collegeRes.json()).data || {};
            const courses = (await coursesRes.json()).data;

            return { ...college, courseCount: Array.isArray(courses) ? courses.length : '—' };
        } catch (error) {
            return { name: item.name, error: true };
        }
    }));

    const rows = [
        ['Location', c => [c.city, c.state].filter(Boolean).join(', ')],
        ['Institute type', c => c.type],
        ['Established', c => c.established_year],
        ['Courses offered', c => c.courseCount],
        ['Hostel fee', c => (c.hostel_fee ? formatMoney(c.hostel_fee) : '')],
        ['Website', c => c.website],
    ];

    target.innerHTML = `
        <table class="info-table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    ${loaded.map(c => `<th scope="col" class="compare-col-head">${escapeHtml(c.name || 'College')}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${rows.map(([label, get]) => `
                    <tr>
                        <th scope="row">${label}</th>
                        ${loaded.map(c => `<td>${escapeHtml((!c.error && get(c)) || 'Not provided')}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function setupHeroActions(college) {
    const id = String(college.id);

    const helpBtn = document.querySelector('#helpBtn');
    const saveBtn = document.querySelector('#saveBtn');
    const compareBtn = document.querySelector('#compareBtn');
    const badge = document.querySelector('#compareBadge');
    const tray = document.querySelector('#compareTray');
    const trayItems = document.querySelector('#compareItems');
    const compareNow = document.querySelector('#compareNow');

    setupModals();

    /* HELP */
    helpBtn?.addEventListener('click', () => openModal(document.querySelector('#helpModal')));

    /* SAVE */
    function paintSave() {
        const saved = readStore(STORE_SAVED).includes(id);
        saveBtn.setAttribute('aria-pressed', String(saved));
        saveBtn.title = saved ? 'Remove from saved' : 'Save college';
    }

    saveBtn?.addEventListener('click', () => {
        let list = readStore(STORE_SAVED);

        if (list.includes(id)) {
            list = list.filter(item => item !== id);
        } else {
            list.push(id);
        }

        writeStore(STORE_SAVED, list);
        paintSave();
    });

    paintSave();

    /* COMPARE */
    function paintCompare() {
        const items = readStore(STORE_COMPARE);
        const inList = items.some(item => String(item.id) === id);

        compareBtn.setAttribute('aria-pressed', String(inList));
        compareBtn.title = inList ? 'Remove from compare' : 'Add to compare';

        badge.textContent = items.length;
        badge.hidden = items.length === 0;

        tray.hidden = items.length === 0;
        compareNow.disabled = items.length < 2;
        compareNow.title = items.length < 2 ? 'Add at least 2 colleges to compare' : '';
        compareBtn.title = items.length >= MAX_COMPARE && !inList ? `Compare list is full (max ${MAX_COMPARE})` : compareBtn.title;

        trayItems.innerHTML = items.map(item => `
            <span class="compare-chip">${escapeHtml(item.name)}
                <button type="button" data-remove="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.name)}">✕</button>
            </span>
        `).join('');
    }

    compareBtn?.addEventListener('click', () => {
        let items = readStore(STORE_COMPARE);

        if (items.some(item => String(item.id) === id)) {
            items = items.filter(item => String(item.id) !== id);
        } else if (items.length >= MAX_COMPARE) {
            shake(compareBtn);
            return;
        } else {
            items.push({ id, name: college.name });
        }

        writeStore(STORE_COMPARE, items);
        paintCompare();
    });

    trayItems?.addEventListener('click', (event) => {
        const remove = event.target.closest('[data-remove]');

        if (remove) {
            writeStore(
                STORE_COMPARE,
                readStore(STORE_COMPARE).filter(item => String(item.id) !== remove.dataset.remove)
            );
            paintCompare();
        }
    });

    document.querySelector('#compareClear')?.addEventListener('click', () => {
        writeStore(STORE_COMPARE, []);
        paintCompare();
    });

    compareNow?.addEventListener('click', () => {
        const items = readStore(STORE_COMPARE);

        if (items.length < 2) {
            return;
        }

        openModal(document.querySelector('#compareModal'));
        renderCompareTable(items);
    });

    paintCompare();
}

/* =========================================
   LOAD COLLEGE
========================================= */

async function loadCollegeDetails() {
    try {
        if (!collegeId) {
            throw new Error('College ID is missing.');
        }

        const response = await fetch(
            `/api/colleges/${encodeURIComponent(collegeId)}`,
            { headers: { Accept: 'application/json' } }
        );

        const result = await response.json();

        if (!response.ok || !result.data) {
            throw new Error(result.message || 'Could not load this college.');
        }

        const college = result.data;

        /* PAGE TITLE */
        document.title = `${college.name} Admission, Courses & Details | CampusPath`;

        /* BASIC INFORMATION */
        setText('#collegeName', college.name);
        setText('#tableCollegeName', college.name);
        setText('#overviewTitle', college.name);
        setText('#highlightsTitle', college.name);
        setText('#admissionTitle', college.name);

        setText('#collegeLocation', [college.city, college.state].filter(Boolean).join(', '));
        setText('#collegeType', college.type, 'Institute type not provided');
        setText('#tableCollegeType', college.type);
        setText('#collegeDescription', college.description);
        setText('#collegeYear', college.established_year);
        setText('#collegeCity', college.city);
        setText('#collegeState', college.state);

        /* OVERVIEW TABLE */
        setText('#overviewYear', college.established_year);
        setText('#overviewType', college.type);
        setText('#overviewCity', college.city);
        setText('#overviewState', college.state);

        /* RATING (orange score + reviews, like the reference design) */
        const rating = college.rating ?? college.average_rating;
        const reviews = college.reviews ?? college.review_count;
        const ratingElement = document.querySelector('#collegeRating');

        if (ratingElement && rating) {
            ratingElement.innerHTML =
                `<span class="r">${escapeHtml(rating)} ★</span>` +
                (reviews ? `<span>(${escapeHtml(reviews)} Reviews)</span>` : '');
            ratingElement.hidden = false;
        }

        /* WEBSITE */
        const website = document.querySelector('#collegeWebsite');
        const heroWebsite = document.querySelector('#heroWebsite');

        if (college.website) {
            const link = document.createElement('a');
            link.href = college.website;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = college.website;
            website.replaceChildren(link);

            heroWebsite.href = college.website;
            heroWebsite.hidden = false;
        } else {
            website.textContent = 'Not provided';
            heroWebsite.hidden = true;
        }

        /* LOGO */
        const logo = document.querySelector('#collegeLogo');
        const initial = college.name?.slice(0, 1) || 'C';

        if (college.logo) {
            const image = document.createElement('img');
            image.src = college.logo;
            image.alt = `${college.name} logo`;
            image.onerror = () => { logo.textContent = initial; };
            logo.replaceChildren(image);
        } else {
            logo.textContent = initial;
        }

     /* HOSTEL + FACILITIES */

const hostelFacilities = document.querySelector('#hostelFacilities');
const hostelFee = document.querySelector('#hostelFee');
const collegeFacilities = document.querySelector('#collegeFacilities');

console.log('College hostel/facility data:', {
    hostel_facilities: college.hostel_facilities,
    hostel_fee: college.hostel_fee,
    facilities: college.facilities
});

/* Hostel Facilities */
if (hostelFacilities) {
    hostelFacilities.textContent =
        college.hostel_facilities?.trim() || 'Not provided';
}

/* Hostel Fee */
if (hostelFee) {
    hostelFee.textContent =
        college.hostel_fee !== null &&
        college.hostel_fee !== undefined &&
        college.hostel_fee !== ''
            ? formatMoney(college.hostel_fee)
            : 'Not provided';
}

/* Campus Facilities */
if (collegeFacilities) {
    const facilities = splitValues(college.facilities);

    if (facilities.length) {
        collegeFacilities.innerHTML = facilities
            .map(facility =>
                `<span class="facility-tag">${escapeHtml(facility)}</span>`
            )
            .join('');
    } else {
        collegeFacilities.innerHTML =
            '<span class="facility-empty">Not provided</span>';
    }
}
        /* ACTION LINKS */
        document.querySelector('#editCollege').href =
            `/colleges/${encodeURIComponent(college.id)}/edit`;

        document.querySelector('#addCollegeCourse').href =
            `/colleges/${encodeURIComponent(college.id)}/courses/create`;

        /* SHOW PAGE */
        detailMessage.hidden = true;
        detailCard.hidden = false;

        setupReadMore();
        setupHeroActions(college);
        setupSectionNav();

        if (window.location.hash) {
            requestAnimationFrame(() => {
                document.querySelector(window.location.hash)?.scrollIntoView();
            });
        }

        loadCollegeCourses(college.id, college.name);

    } catch (error) {
        console.error('Error loading college details:', error);

        detailMessage.textContent = error.message || 'Unable to load college details.';
        detailMessage.classList.add('error');
    }
}

/* =========================================
   LOAD COURSES
========================================= */

async function loadCollegeCourses(id, collegeName = '') {
    const container = document.querySelector('#collegeCourses');
    const eligibilityContainer = document.querySelector('#admissionEligibility');
    const chips = document.querySelector('#courseChips');

    try {
        const response = await fetch(
            `/api/colleges/${encodeURIComponent(id)}/courses`,
            { headers: { Accept: 'application/json' } }
        );

        const result = await response.json();

        if (!response.ok || !Array.isArray(result.data)) {
            throw new Error(result.message || 'Could not load courses.');
        }

        /* NO COURSES */
        if (!result.data.length) {
            container.innerHTML = `
                <div class="courses-empty-card">
                    <div class="courses-empty-icon">📚</div>
                    <strong>No courses added yet</strong>
                    <p>Courses for this college have not been added yet.</p>
                    <a href="/colleges/${encodeURIComponent(id)}/courses/create" class="secondary-button">
                        Add first course
                    </a>
                </div>
            `;

            eligibilityContainer.innerHTML = `
                <p class="courses-empty">
                    No course eligibility information has been added for this college yet.
                </p>
            `;

            return;
        }

        /* COURSE COUNT BADGE */
        const heading = document.querySelector('.courses-heading h2');

        if (heading) {
            heading.querySelector('.course-count-badge')?.remove();

            const badge = document.createElement('span');
            badge.className = 'course-count-badge';
            badge.textContent = `${result.data.length} course${result.data.length !== 1 ? 's' : ''}`;
            heading.appendChild(badge);
        }

        /* COURSE TABLE */
        const rows = result.data.map((course, index) => {
            const duration = [course.length, course.duration].filter(Boolean).join(' ') || '—';
            const eligibility = course.eligibility || '—';
            const exam = course.exam_required || course.exam || '—';

            return `
                <tr>
                    <td class="course-no-cell"><span>${index + 1}</span></td>
                    <td class="course-name-cell">${escapeHtml(course.name || 'Untitled course')}</td>
                    <td>${escapeHtml(duration)}</td>
                    <td>${escapeHtml(eligibility)}</td>
                    <td>${escapeHtml(exam)}</td>
                </tr>
            `;
        }).join('');

        container.innerHTML = `
            <div class="table-wrap">
                <table class="info-table course-table">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Course name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Eligibility</th>
                            <th scope="col">Entrance exam</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;

        /* TOP COURSES CHIPS */
        if (chips) {
            chips.innerHTML = `
                <h3>Top Courses at ${escapeHtml(collegeName)}</h3>
                ${result.data.map(course => `
                    <a href="#college-courses">${escapeHtml(collegeName)} ${escapeHtml(course.name || 'Course')}</a>
                `).join('')}
            `;
            chips.hidden = false;
        }

        /* ADMISSION / ELIGIBILITY TABLE */
        const eligibilityRows = result.data.map(course => `
            <tr>
                <td>${escapeHtml(course.name || 'Untitled course')}</td>
                <td>${escapeHtml(course.eligibility || 'Not provided')}</td>
                <td>${escapeHtml(course.exam_required || course.exam || 'Not provided')}</td>
            </tr>
        `).join('');

        eligibilityContainer.innerHTML = `
            <table class="info-table">
                <thead>
                    <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Eligibility criteria</th>
                        <th scope="col">Entrance exam</th>
                    </tr>
                </thead>
                <tbody>${eligibilityRows}</tbody>
            </table>
        `;

    } catch (error) {
        console.error('Error loading courses:', error);

        container.innerHTML = `
            <p class="courses-empty error">
                ${escapeHtml(error.message || 'Unable to load courses.')}
            </p>
        `;
    }
}

setupBackToTop();
loadCollegeDetails();