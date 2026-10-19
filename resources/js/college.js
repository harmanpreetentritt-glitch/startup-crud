
let colleges = [];
const savedCollegeIds = new Set(
    JSON.parse(localStorage.getItem('savedCollegeIds') || '[]').map(String)
);
let currentPage = 1;
const itemsPerPage = 10;

// Load colleges from API

 // Load colleges from API
async function loadColleges() {
    const list = document.getElementById('list');

    try {
        const params = new URLSearchParams();

        // Read selected filters from the existing filter UI
        document.querySelectorAll('#filters input[data-filter-key]:checked')
            .forEach((input) => {
                params.append(input.dataset.filterKey, input.value);
            });

        const searchInput = document.getElementById('spInput');
        if (searchInput?.value.trim()) {
            params.set('search', searchInput.value.trim());
        }

        const response = await fetch(`/api/colleges?${params.toString()}`, {
            headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();

        if (Array.isArray(result)) {
            colleges = result;
        } else if (Array.isArray(result.data)) {
            colleges = result.data;
        } else {
            throw new Error('Invalid API response format');
        }

        showColleges();
    } catch (error) {
        console.error('Error loading colleges:', error);
        if (list) {
            list.innerHTML =
                '<div class="empty">Unable to load colleges. Check the browser console.</div>';
        }
        const pagination = document.getElementById('pagination');
        if (pagination) pagination.innerHTML = '';
    }
}


// Render college cards and pagination

// function showColleges(resetPage = true) {
//     const list = document.getElementById('list');

//     if (!list) {
//         console.error('Missing HTML element: #list');
//         return;
//     }

//     try {
//         const filteredColleges = colleges;

//         if (resetPage) {
//             currentPage = 1;
//         }

//         const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
//         currentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

//         const start = (currentPage - 1) * itemsPerPage;
//         const pageColleges = filteredColleges.slice(
//             start,
//             start + itemsPerPage
//         );

//         list.innerHTML = pageColleges.length
//             ? pageColleges.map(makeCard).join('')
//             : '<div class="empty">No colleges match these filters.</div>';

//         renderPagination(totalPages);

//         if (typeof renderFilterChips === 'function') {
//             renderFilterChips();
//         }
//     } catch (error) {
//         console.error('Error rendering colleges:', error);
//     }
// }

function showColleges(resetPage = true) {
    const list = document.getElementById('list');
    if (!list) {
        console.error('Missing HTML element: #list');
        return;
    }

    if (resetPage) {
        currentPage = 1;
    }

    const totalPages = Math.ceil(colleges.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

    const start = (currentPage - 1) * itemsPerPage;
    const pageColleges = colleges.slice(start, start + itemsPerPage);

    list.innerHTML = pageColleges.length
        ? pageColleges.map(makeCard).join('')
        : '<div class="empty">No colleges found.</div>';

    renderPagination(totalPages);

    const count = document.getElementById('count');
    if (count) {
        count.textContent = `Showing ${colleges.length} Colleges`;
    }
}



// Render pagination buttons
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = `
        <li>
            <button type="button" data-page="${currentPage - 1}"
                ${currentPage === 1 ? 'disabled' : ''}>
                Previous
            </button>
        </li>
    `;

    for (let page = 1; page <= totalPages; page++) {
        html += `
            <li>
                <button type="button"
                    data-page="${page}"
                    class="${page === currentPage ? 'active' : ''}"
                    ${page === currentPage ? 'aria-current="page"' : ''}>
                    ${page}
                </button>
            </li>
        `;
    }

    html += `
        <li>
            <button type="button" data-page="${currentPage + 1}"
                ${currentPage === totalPages ? 'disabled' : ''}>
                Next
            </button>
        </li>
    `;

    pagination.innerHTML = html;
}

// Handle pagination clicks
document.getElementById('pagination')?.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-page]');
    if (!button || button.disabled) return;

    currentPage = Number(button.dataset.page);
    showColleges(false);

    document.getElementById('list')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Keep search panel close button working
const spInput = document.getElementById('spInput');
const spClose = document.getElementById('spClose');

spInput?.addEventListener('input', function () {
    if (spClose) {
        spClose.style.display = spInput.value.trim() ? 'none' : 'block';
    }
});

// Start loading colleges
loadColleges();
function renderFilters() {
    const filters = document.querySelector('#filters');
    filters.innerHTML = filterDefinitions.map((definition) => {
        const search = filterSearch[definition.key] || '';
        const options = filterOptions(definition).filter((option) =>
            option.label.toLowerCase().includes(search.toLowerCase())
        );
        const optionMarkup = options.length
            ? options.map((option) => {
                const checked = chosenFilters[definition.key].has(option.value);
                const inputType = definition.single ? 'radio' : 'checkbox';
                const inputName = definition.single ? `name="filter-${definition.key}"` : '';
                const controlClass = definition.single ? 'r' : 'c';
                return `<label class="opt ${controlClass}">
                    <input type="${inputType}" ${inputName} data-filter-key="${definition.key}" value="${escapeHtml(option.value)}" ${checked ? 'checked' : ''}>
                    <i aria-hidden="true"></i>
                    <span class="opt-label">${escapeHtml(option.label)}</span>
                    <span class="opt-count">(${option.count})</span>
                </label>`;
            }).join('')
            : `<p class="filter-empty">${search ? 'No matching options.' : 'No filter data available yet.'}</p>`;

        return `<section class="fbox" id="filter-box-${definition.key}">
            <button class="filter-heading" type="button" data-fold="${definition.key}" aria-expanded="true">
                <span>${definition.label}</span><span class="filter-chevron" aria-hidden="true"></span>
            </button>
            <div class="fbody">
                <input class="filter-search" type="search" data-search-filter="${definition.key}" value="${escapeHtml(search)}" placeholder="Search" aria-label="Search ${definition.label}">
                <div class="opts">${optionMarkup}</div>
            </div>
        </section>`;
    }).join('');
}
function makeCard(college) {
    const isSaved = savedCollegeIds.has(String(college.id));

    return `
        <article class="card" id="college-${college.id}">
            <div class="card-head">
                <h3>${escapeHtml(college.name)}</h3>

                <div class="icons">
                    <button class="share-college" data-college-id="${college.id}" data-college-name="${escapeHtml(college.name)}" title="Share" aria-label="Share college">&#8599;</button>
                    <button class="save-college ${isSaved ? 'on' : ''}" data-college-id="${college.id}" title="${isSaved ? 'Remove saved college' : 'Save college'}" aria-label="${isSaved ? 'Remove saved college' : 'Save college'}" aria-pressed="${isSaved}">${isSaved ? '&#9829;' : '&#9825;'}</button>
                </div>
            </div>

            <div class="card-body">
                <div class="cimg">
                    ${college.logo
            ? `<img src="${escapeHtml(college.logo)}" alt="${escapeHtml(college.name)}">`
            : escapeHtml(college.name)
        }
                </div>

                <div class="cinfo">
                    <div class="meta">
                        <span class="college-location"><svg class="location-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10.2c0 5.1-7 11.1-7 11.1S5 15.3 5 10.2a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.3"></circle></svg>${escapeHtml(college.city)}, ${escapeHtml(college.state)}</span>
                        <span>⚑ ${escapeHtml(college.type ?? '')}</span>
                    </div>

                    <div class="stats">
                        <div class="stat">
                            <b>${college.established_year ?? '—'}</b>
                            <small>Established</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-foot">
                <nav>
                    <a href="/colleges/${college.id}#college-courses">Courses</a>
                    <a href="/colleges/${college.id}#admission">Admission</a>
                    <a href="/colleges/${college.id}#college-info">Details</a>
                </nav>

                <div>
                    <button class="btn" type="button" data-view-college="${college.id}">View College</button>

                    <a class="btn edit-college" href="/colleges/${college.id}/edit">Edit college</a>
                    <button class="btn delete-college" type="button" data-delete-college="${college.id}" data-college-name="${escapeHtml(college.name)}">Delete</button>
                </div>
            </div>
        </article>
    `;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[character]));
}
