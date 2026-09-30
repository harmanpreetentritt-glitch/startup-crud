const collegeId = document.body.dataset.collegeId;
const detailMessage = document.querySelector('#detailMessage');
const detailCard = document.querySelector('#collegeDetails');

function setText(id, value, fallback = 'Not provided') {
    document.querySelector(id).textContent = value || fallback;
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
        document.title = `${college.name} | CampusPath`;
        setText('#collegeName', college.name);
        setText('#tableCollegeName', college.name);
        setText('#overviewTitle', college.name);
        setText('#collegeLocation', [college.city, college.state].filter(Boolean).join(', '));
        setText('#collegeType', college.type, 'Institute type not provided');
        setText('#tableCollegeType', college.type);
        setText('#collegeDescription', college.description);
        setText('#heroDescription', college.description);
        setText('#collegeYear', college.established_year);
        setText('#collegeCity', college.city);
        setText('#collegeState', college.state);

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
            logo.replaceChildren(image);
        } else {
            logo.textContent = college.name?.slice(0, 1) || 'C';
        }

        document.querySelector('#editCollege').href = `/colleges/${encodeURIComponent(college.id)}/edit`;
        document.querySelector('#addCollegeCourse').href = `/colleges/${encodeURIComponent(college.id)}/courses/create`;
        detailMessage.hidden = true;
        detailCard.hidden = false;
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
            return;
        }

        const rows = result.data.map((course) => {
            const duration = [course.length, course.duration].filter(Boolean).join(' ');
            const dates = [course.start_date, course.end_date].filter(Boolean).join(' – ');
            return `<tr>
                <td>${escapeHtml(course.name || 'Untitled course')}</td>
                <td>${escapeHtml(duration || 'Not provided')}</td>
                <td>${escapeHtml(dates || 'Not provided')}</td>
            </tr>`;
        }).join('');

        container.innerHTML = `<div class="table-wrap"><table class="info-table course-table">
            <thead><tr><th scope="col">Course</th><th scope="col">Duration</th><th scope="col">Dates</th></tr></thead>
            <tbody>${rows}</tbody>
        </table></div>`;
    } catch (error) {
        container.innerHTML = `<p class="courses-empty error">${escapeHtml(error.message || 'Unable to load courses.')}</p>`;
    }
}

loadCollegeDetails();
