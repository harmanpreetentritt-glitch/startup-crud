const collegeId = document.body.dataset.collegeId;
const detailMessage = document.querySelector('#detailMessage');
const detailCard = document.querySelector('#collegeDetails');

function setText(id, value, fallback = 'Not provided') {
    const element = document.querySelector(id);
    if (element) element.textContent = value || fallback;
}

async function loadCollegeDetails() {
    try {
        const response = await fetch(`/api/colleges/${encodeURIComponent(collegeId)}`, {
            headers: { Accept: 'application/json' },
        });
        const result = await response.json();

        if (!response.ok || !result.data) {
            throw new Error(result.message || 'Could not load this college.');
        }

        const college = result.data;
        document.title = `${college.name} Admission, Courses & Details | CampusPath`;
        setText('#collegeName', college.name);
        setText('#tableCollegeName', college.name);
        setText('#overviewTitle', college.name);
        setText('#admissionTitle', college.name);
        setText('#collegeLocation', [college.city, college.state].filter(Boolean).join(', '));
        setText('#collegeType', college.type, 'Institute type not provided');
        setText('#tableCollegeType', college.type);
        setText('#collegeDescription', college.description);
        setText('#heroDescription', college.description, 'Explore college profile, admission information, and available courses.');
        setText('#heroYear', college.established_year ? `Established ${college.established_year}` : '');
        setText('#collegeYear', college.established_year);
        setText('#collegeCity', college.city);
        setText('#collegeState', college.state);

        const rating = college.rating ?? college.average_rating;
        const reviews = college.reviews ?? college.review_count;
        const ratingElement = document.querySelector('#collegeRating');
        if (ratingElement && rating) {
            ratingElement.textContent = `${rating} ★${reviews ? ` (${reviews} reviews)` : ''}`;
            ratingElement.hidden = false;
        }

        const website = document.querySelector('#collegeWebsite');
        if (college.website) {
            const link = document.createElement('a');
            link.href = college.website;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = college.website;
            website.replaceChildren(link);
            const heroWebsite = document.querySelector('#heroWebsite');
            heroWebsite.href = college.website;
            heroWebsite.hidden = false;
        } else {
            website.textContent = 'Not provided';
            document.querySelector('#heroWebsite').hidden = true;
        }

        const logo = document.querySelector('#collegeLogo');
        if (college.logo) {
            const image = document.createElement('img');
            image.src = college.logo;
            image.alt = `${college.name} logo`;
            image.onerror = () => {
                logo.textContent = college.name?.slice(0, 1) || 'C';
            };
            logo.replaceChildren(image);
        } else {
            logo.textContent = college.name?.slice(0, 1) || 'C';
        }

        document.querySelector('#editCollege').href = `/colleges/${encodeURIComponent(college.id)}/edit`;
        document.querySelector('#addCollegeCourse').href = `/colleges/${encodeURIComponent(college.id)}/courses/create`;
        detailMessage.hidden = true;
        detailCard.hidden = false;
        if (window.location.hash) {
            requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
        }
        loadCollegeCourses(college.id);
    } catch (error) {
        detailMessage.textContent = error.message || 'Unable to load college details.';
        detailMessage.classList.add('error');
    }
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
}

async function loadCollegeCourses(id) {
    const container = document.querySelector('#collegeCourses');

    try {
        const response = await fetch(`/api/colleges/${encodeURIComponent(id)}/courses`, {
            headers: { Accept: 'application/json' },
        });
        const result = await response.json();
        if (!response.ok || !Array.isArray(result.data)) {
            throw new Error(result.message || 'Could not load courses.');
        }

        if (!result.data.length) {
            container.innerHTML = '<p class="courses-empty">No courses have been added for this college yet.</p>';
            document.querySelector('#admissionEligibility').innerHTML =
                '<p class="courses-empty">No course eligibility information has been added for this college yet.</p>';
            return;
        }

        // Course count badge next to heading
        const heading = document.querySelector('.courses-heading h2');
        if (heading && !heading.querySelector('.course-count-badge')) {
            const badge = document.createElement('span');
            badge.className = 'course-count-badge';
            badge.textContent = result.data.length + ' course' + (result.data.length !== 1 ? 's' : '');
            heading.appendChild(badge);
        }

        // Table rows
        const rows = result.data.map((course, index) => {
            const duration = [course.length, course.duration].filter(Boolean).join(' ') || '—';
            const eligibility = course.eligibility || '—';
            const exam = course.exam_required || course.exam || '—';
            return `<tr>
                <td class="course-no-cell"><span>${index + 1}</span></td>
                <td class="course-name-cell">${escapeHtml(course.name || 'Untitled course')}</td>
                <td>${escapeHtml(duration)}</td>
                <td>${escapeHtml(eligibility)}</td>
                <td>${escapeHtml(exam)}</td>
            </tr>`;
        }).join('');

        container.innerHTML = `<div class="table-wrap"><table class="info-table course-table">
            <thead><tr>
                <th scope="col">S.No.</th>
                <th scope="col">Course name</th>
                <th scope="col">Duration</th>
                <th scope="col">Eligibility</th>
                <th scope="col">Entrance exam</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table></div>`;

        // Admission eligibility table (for the Admission section)
        const eligibilityRows = result.data.map((course) => `<tr>
            <td>${escapeHtml(course.name || 'Untitled course')}</td>
            <td>${escapeHtml(course.eligibility || 'Not provided')}</td>
            <td>${escapeHtml(course.exam_required || course.exam || 'Not provided')}</td>
        </tr>`).join('');
        document.querySelector('#admissionEligibility').innerHTML = `<table class="info-table">
            <thead><tr><th scope="col">Course</th><th scope="col">Eligibility criteria</th><th scope="col">Entrance exam</th></tr></thead>
            <tbody>${eligibilityRows}</tbody>
        </table>`;

    } catch (error) {
        container.innerHTML = `<p class="courses-empty error">${escapeHtml(error.message || 'Unable to load courses.')}</p>`;
    }
}

loadCollegeDetails();