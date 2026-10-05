// By API
let colleges = [];
const filterDefinitions = [
    { key: 'stream', label: 'Stream', fields: ['stream', 'streams'], single: true, options: ['Commerce & Banking', 'Design', 'Engineering', 'Hotel Management', 'Information Technology', 'Management', 'Medical', 'Science', 'Law', 'Arts & Humanities', 'Agriculture', 'Education'] },
    { key: 'degree', label: 'Degree', fields: ['degree', 'degrees'], options: ['B.A. (Bachelor of Arts)', 'B.Com. (Bachelor of Commerce)', 'B.Des. (Bachelor of Design)', 'B.Sc. (Bachelor of Science)', 'B.Tech. (Bachelor of Technology)', 'B.B.A. (Bachelor of Business Administration)', 'B.C.A. (Bachelor of Computer Applications)', 'M.A. (Master of Arts)', 'M.B.A. (Master of Business Administration)', 'M.C.A. (Master of Computer Applications)', 'M.Sc. (Master of Science)', 'M.Tech. (Master of Technology)', 'M.B.B.S. (Bachelor of Medicine and Bachelor of Surgery)', 'LL.B. (Bachelor of Laws)'] },
    {
        key: 'state', label: 'State / Union Territory', fields: ['state'], options: [
            'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
            'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
            'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
            'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
            'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
            'Lakshadweep', 'Puducherry',
        ]
    },
    { key: 'city', label: 'City', fields: ['city'] },
    { key: 'study_mode', label: 'Study Mode', fields: ['study_mode', 'study_modes', 'mode'], options: ['Regular', 'Full Time', 'Part Time', 'Online', 'Distance', 'Hybrid'] },
    { key: 'specialization', label: 'Specialization', fields: ['specialization', 'specializations'], options: ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics', 'Data Science', 'Finance', 'Marketing', 'Human Resources', 'Business Analytics', 'Medicine', 'Design'] },
    { key: 'type', label: 'Institute Type', fields: ['type', 'institute_type'], options: ['Public', 'Government', 'Private', 'Deemed', 'Autonomous'] },
    { key: 'exam', label: 'Exam', fields: ['exam', 'exams'], options: ['JEE Main', 'JEE Advanced', 'NEET UG', 'NEET PG', 'CUET', 'CAT', 'MAT', 'GATE', 'CLAT', 'NIFT', 'NID DAT'] },
    { key: 'hostel', label: 'Hostel', fields: ['hostel', 'hostels', 'hostel_type', 'hostel_facility', 'hostel_facilities'], options: ['Boys Hostel', 'Girls Hostel'] },
    { key: 'hostel_fee', label: 'Hostel Fee Range', fields: ['hostel_fee', 'hostel_fee_range', 'hostel_fees'], range: true },
    { key: 'facilities', label: 'Facilities', fields: ['facility', 'facilities'], options: ['Boys Hostel', 'Girls Hostel', 'Library', 'Laboratories', 'Sports Facilities', 'Cafeteria', 'Wi-Fi', 'Transport', 'Medical Facilities', 'Auditorium'] },
];
const chosenFilters = Object.fromEntries(filterDefinitions.map((filter) => [filter.key, new Set()]));
const filterSearch = {};
let quickSearchQuery = '';
const normalizeFilterValue = (value) => String(value).toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
const stateAliases = {
    'andaman and nicobar islands': ['andaman & nicobar islands'],
    'dadra and nagar haveli and daman and diu': ['dadra and nagar haveli', 'daman and diu'],
    delhi: ['delhi ncr', 'new delhi', 'nct of delhi', 'national capital territory of delhi'],
    'jammu and kashmir': ['jammu & kashmir', 'j&k'],
    odisha: ['orissa'],
    puducherry: ['pondicherry'],
    uttarakhand: ['uttaranchal'],
};

function normalizedStateValues(value) {
    const canonical = normalizeFilterValue(value);
    const aliases = Object.entries(stateAliases).find(([name]) => normalizeFilterValue(name) === canonical)?.[1] || [];
    return new Set([canonical, ...aliases.map(normalizeFilterValue)]);
}

function stateMatches(actual, selected) {
    const actualValues = normalizedStateValues(actual);
    const selectedValues = normalizedStateValues(selected);
    return [...actualValues].some((value) => selectedValues.has(value));
}
const savedCollegeIds = new Set(
    JSON.parse(localStorage.getItem('savedCollegeIds') || '[]').map(String)
);

async function loadColleges() {
    try {
        const response = await fetch('/api/colleges');

        if (!response.ok) {
            throw new Error('Failed to fetch colleges');
        }

        const result = await response.json();

        if (!Array.isArray(result.data)) {
            throw new Error('Unexpected API response: expected a data array');
        }


        colleges = result.data;
        console.log('Colleges from API:', colleges);
        renderFilters();
        showColleges();



    } catch (error) {
        console.error('Error loading colleges:', error);

        document.querySelector('#list').innerHTML =
            '<div class="empty">Unable to load colleges.</div>';
    }
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
    return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
}

function getCourseDetails(college) {
    if (!college.course_details) {
        return [];
    }

    if (Array.isArray(college.course_details)) {
        return college.course_details;
    }

    if (typeof college.course_details === 'string') {
        try {
            const parsed = JSON.parse(college.course_details);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error('Invalid course_details JSON:', error);
            return [];
        }
    }

    return [];
}


function fieldValues(college, fields) {
    return fields.flatMap((field) => {
        const value = college[field];
        if (value === null || value === undefined || value === '') return [];
        return (Array.isArray(value) ? value : [value]).map(String);
    });
}

function splitFilterValues(value) {
    return (Array.isArray(value) ? value : [value])
        .flatMap((item) => String(item ?? '').split(/[,;\n]+/))
        .map((item) => item.trim())
        .filter(Boolean);
}

const degreeAliasGroups = [
    ['btech', ['btech', 'bacheloroftechnology', 'bachelorofengineering']],
    ['mtech', ['mtech', 'masteroftechnology', 'masterofengineering']],
    ['barch', ['barch', 'bachelorofarchitecture']],
    ['bsc', ['bsc', 'bachelorofscience']],
    ['msc', ['msc', 'masterofscience']],
    ['ba', ['ba', 'bachelorofarts']],
    ['ma', ['ma', 'masterofarts']],
    ['mba', ['mba', 'masterofbusinessadministration']],
    ['bba', ['bba', 'bachelorofbusinessadministration']],
    ['bcom', ['bcom', 'bachelorofcommerce']],
    ['bca', ['bca', 'bachelorofcomputerapplications', 'bachelorofcomputerapplication']],
    ['mca', ['mca', 'masterofcomputerapplications']],
    ['mbbs', ['mbbs', 'bachelorofmedicineandbachelorofsurgery']],
    ['bdes', ['bdes', 'bachelorofdesign']],
    ['bed', ['bed', 'bachelorofeducation']],
    ['bpharm', ['bpharma', 'bpharm', 'bachelorofpharmacy']],
    ['llb', ['llb', 'bacheloroflaws']],
];

function degreeKeys(value) {
    const normalized = normalizeFilterValue(value);
    return degreeAliasGroups
        .filter(([, aliases]) => aliases.some((alias) => normalized === alias
            || (alias.length >= 3 && normalized.includes(alias))))
        .map(([key]) => key);
}

function collegeFilterValues(college, definition) {
    const values = fieldValues(college, definition.fields).flatMap(splitFilterValues);

    const courses = getCourseDetails(college);

    if (definition.key === 'stream') {
        courses.forEach((course) => {
            values.push(...splitFilterValues(course.stream));
        });
    }

    if (definition.key === 'degree') {
        courses.forEach((course) => {
            const explicitDegrees = splitFilterValues(course.degree);
            const inferredDegrees = degreeKeys(course.name);

            values.push(
                ...explicitDegrees,
                ...(inferredDegrees.length
                    ? inferredDegrees
                    : splitFilterValues(course.name))
            );
        });
    }

    if (definition.key === 'study_mode') {
        courses.forEach((course) => {
            values.push(...splitFilterValues(course.study_mode));
        });
    }

    if (definition.key === 'specialization') {
        courses.forEach((course) => {
            values.push(...splitFilterValues(course.specialization));
        });
    }

    if (definition.key === 'exam') {
        courses.forEach((course) => {
            values.push(...splitFilterValues(course.exam));
        });
    }

    return [...new Set(values)];
}

// function filterValueMatches(definition, actual, selected) {
//     if (definition.key === 'state') return stateMatches(actual, selected);
//     if (definition.key === 'degree') {
//         const actualDegrees = degreeKeys(actual);
//         const selectedDegrees = degreeKeys(selected);
//         if (actualDegrees.length && selectedDegrees.length) {
//             return actualDegrees.some((degree) => selectedDegrees.includes(degree));
//         }
//     }
//     return normalizeFilterValue(actual) === normalizeFilterValue(selected);
//  }


function filterValueMatches(definition, actual, selected) {

    if (definition.key === 'state') {
        return stateMatches(actual, selected);
    }

    if (definition.key === 'degree') {
        const actualDegrees = degreeKeys(actual);
        const selectedDegrees = degreeKeys(selected);

        if (actualDegrees.length && selectedDegrees.length) {
            return actualDegrees.some((degree) =>
                selectedDegrees.includes(degree)
            );
        }
    }

    if (definition.key === 'hostel') {
        const actualHostel = normalizeFilterValue(actual).replace(/hostels$/, 'hostel');
        const selectedHostel = normalizeFilterValue(selected).replace(/hostels$/, 'hostel');

        return actualHostel === selectedHostel;
    }

    return normalizeFilterValue(actual) === normalizeFilterValue(selected);
}

function collegeMatchesStream(college, stream) {

    const normalizedStream = normalizeFilterValue(stream);

    const collegeStreams = fieldValues(college, ['stream', 'streams']);

    const courses = getCourseDetails(college);

    // Check the actual stream stored inside course_details
    const courseStreams = courses.flatMap((course) =>
        splitFilterValues(course.stream)
    );

    if (
        courseStreams.some(
            (value) =>
                normalizeFilterValue(value) === normalizedStream
        )
    ) {
        return true;
    }

    // Keep the existing fallback logic
    const courseDetails = courses.flatMap((course) =>
        [
            course.name,
            course.degree,
            course.specialization
        ].filter(Boolean)
    );

    const streamCourseTerms = {

        engineering: [
            'engineering',
            'btech',
            'mtech',
            'bachelorofengineering',
            'masterofengineering',
            'bacheloroftechnology',
            'masteroftechnology'
        ],

        management: [
            'management',
            'mba',
            'bba',
            'businessadministration',
            'bms'
        ],

        commercebanking: [
            'commerce',
            'banking',
            'bcom',
            'accountancy'
        ],

        medical: [
            'medical',
            'medicine',
            'mbbs',
            'bds',
            'bpharm',
            'pharmacy',
            'nursing'
        ],

        science: [
            'science',
            'bsc',
            'msc',
            'radiotherapy',
            'statistics'
        ],

        hotelmanagement: [
            'hotelmanagement',
            'hospitality'
        ],

        informationtechnology: [
            'informationtechnology',
            'computerapplication',
            'bca',
            'software'
        ],

        law: [
            'law',
            'llb',
            'clat'
        ],

        agriculture: [
            'agriculture',
            'bscagriculture'
        ],

        design: [
            'design',
            'bdes',
            'fashiondesign'
        ],

        education: [
            'education',
            'bed',
            'teaching'
        ],

        masscommunication: [
            'masscommunication',
            'journalism',
            'communication'
        ],

        artsandhumanities: [
            'arts',
            'humanities',
            'liberalarts'
        ],

        nursing: [
            'nursing'
        ],

        dental: [
            'dental',
            'bds',
            'dentistry'
        ],

        performingarts: [
            'performingarts',
            'theatre',
            'music'
        ]

    }[normalizedStream] || [normalizedStream];

    return (
        collegeStreams.some(
            (value) =>
                normalizeFilterValue(value) === normalizedStream
        ) ||
        courseDetails.some((detail) =>
            streamCourseTerms.some((term) =>
                normalizeFilterValue(detail).includes(term)
            )
        )
    );
}

const hostelFeeRanges = [
    { key: '0-25000', label: 'Below ₹25,000', min: 0, max: 25000 },
    { key: '25000-50000', label: '₹25,000 – ₹50,000', min: 25000, max: 50000 },
    { key: '50000-100000', label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
    { key: '100000+', label: 'Above ₹1,00,000', min: 100000, max: Infinity },
];

function hostelFeeRange(college) {
    const raw = fieldValues(college, ['hostel_fee', 'hostel_fee_range', 'hostel_fees'])[0];
    if (!raw) return null;
    const numberText = raw.match(/[\d,]+(?:\.\d+)?/)?.[0];
    const amount = numberText ? Number(numberText.replace(/,/g, '')) : NaN;
    if (!Number.isFinite(amount)) return null;
    return hostelFeeRanges.find((range) => amount >= range.min && amount < range.max)?.key ?? null;
}

function filterOptions(definition) {
    if (definition.range) {
        return hostelFeeRanges.map((range) => ({
            value: range.key,
            label: range.label,
            count: colleges.filter((college) => hostelFeeRange(college) === range.key).length,
        }));
    }

    const counts = new Map();
    colleges.forEach((college) => {
        new Set(collegeFilterValues(college, definition)).forEach((value) => {
            counts.set(value, (counts.get(value) || 0) + 1);
        });
    });
    const options = new Map();
    (definition.options || []).forEach((label) => {
        const normalizedOption = normalizeFilterValue(label);
        const matchingCount = definition.key === 'stream'
            ? colleges.filter((college) => collegeMatchesStream(college, label)).length
            : colleges.filter((college) => collegeFilterValues(college, definition)
                .some((value) => filterValueMatches(definition, value, label))).length;
        options.set(normalizedOption, { value: label, label, count: matchingCount });
    });
    counts.forEach((count, value) => {
        const normalizedValue = normalizeFilterValue(value);
        const hasOption = (definition.options || []).some((label) => filterValueMatches(definition, value, label));
        if (!hasOption && !options.has(normalizedValue)) options.set(normalizedValue, { value, label: value, count });
    });
    return [...options.values()].sort((a, b) => a.label.localeCompare(b.label));
}

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

function collegeMatchesFilters(college) {
    if (quickSearchQuery) {
        const courseNames = getCourseDetails(college)
            .flatMap((course) => [
                course.name,
                course.degree,
                course.specialization,
                course.stream,
                course.exam
            ])
            .filter(Boolean);

        const searchText = [
            college.name,
            college.city,
            college.state,
            college.type,
            ...courseNames
        ]
            .join(' ')
            .toLocaleLowerCase();

        if (!searchText.includes(quickSearchQuery.toLocaleLowerCase())) {
            return false;
        }
    }
    return filterDefinitions.every((definition) => {
        const selected = chosenFilters[definition.key];
        if (!selected.size) return true;
        if (definition.range) return selected.has(hostelFeeRange(college));
        if (definition.key === 'stream') {
            return [...selected].some((selectedValue) => collegeMatchesStream(college, selectedValue));
        }
        const values = collegeFilterValues(college, definition);
        return [...selected].some((selectedValue) =>
            values.some((value) => filterValueMatches(definition, value, selectedValue))
        );
    });
}

function showColleges() {
    const list = document.querySelector('#list');
    const count = document.querySelector('#count');
    const visibleColleges = colleges.filter(collegeMatchesFilters);

    list.innerHTML = visibleColleges.length
        ? visibleColleges.map(makeCard).join('')
        : '<div class="empty">No colleges match these filters.</div>';

    count.textContent = `Showing ${visibleColleges.length} Colleges in India`;
    renderFilterChips();
}

function renderFilterChips() {
    const chips = document.querySelector('#chips');
    const searchChip = quickSearchQuery
        ? `<button class="chip" type="button" data-remove-search>Search: ${escapeHtml(quickSearchQuery)} &#10005;</button>`
        : '';
    chips.innerHTML = searchChip + filterDefinitions.flatMap((definition) =>
        [...chosenFilters[definition.key]].map((value) => {
            const option = filterOptions(definition).find((item) => item.value === value);
            const label = option?.label || value;
            return `<button class="chip" type="button" data-remove-filter="${definition.key}" data-filter-value="${escapeHtml(value)}">${escapeHtml(label)} &#10005;</button>`;
        })
    ).join('');
}

document.querySelector('#filters').addEventListener('change', (event) => {
    const input = event.target.closest('[data-filter-key]');
    if (!input) return;
    const definition = filterDefinitions.find((filter) => filter.key === input.dataset.filterKey);
    if (definition.single) {
        chosenFilters[definition.key].clear();
        if (input.checked) chosenFilters[definition.key].add(input.value);
    } else if (input.checked) {
        chosenFilters[definition.key].add(input.value);
    } else {
        chosenFilters[definition.key].delete(input.value);
    }
    showColleges();
});

document.querySelector('#filters').addEventListener('input', (event) => {
    const search = event.target.closest('[data-search-filter]');
    if (!search) return;
    filterSearch[search.dataset.searchFilter] = search.value;
    renderFilters();
    const replacement = document.querySelector(`[data-search-filter="${search.dataset.searchFilter}"]`);
    replacement?.focus();
    replacement?.setSelectionRange(replacement.value.length, replacement.value.length);
});

document.querySelector('#filters').addEventListener('click', (event) => {
    const heading = event.target.closest('[data-fold]');
    if (!heading) return;
    const box = document.querySelector(`#filter-box-${heading.dataset.fold}`);
    box.classList.toggle('closed');
    heading.setAttribute('aria-expanded', String(!box.classList.contains('closed')));
});

document.querySelector('#chips').addEventListener('click', (event) => {
    if (event.target.closest('[data-remove-search]')) {
        quickSearchQuery = '';
        const searchInput = document.querySelector('#quickSearchInput');
        if (searchInput) searchInput.value = '';
        showColleges();
        return;
    }
    const chip = event.target.closest('[data-remove-filter]');
    if (!chip) return;
    chosenFilters[chip.dataset.removeFilter].delete(chip.dataset.filterValue);
    renderFilters();
    showColleges();
});

const quickSearchInput = document.querySelector('#quickSearchInput');

console.log('SEARCH INPUT FOUND:', quickSearchInput);

quickSearchInput?.addEventListener('input', () => {
    quickSearchQuery = quickSearchInput.value.trim();

    console.log('SEARCH TYPED:', quickSearchQuery);
    console.log('COURSES:', colleges[0]?.course_details);

    showColleges();
});




document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        showColleges();
    });
});

document.querySelector('#list').addEventListener('click', (event) => {
    const deleteButton = event.target.closest('[data-delete-college]');
    if (deleteButton) {
        deleteCollege(deleteButton.dataset.deleteCollege, deleteButton.dataset.collegeName);
        return;
    }

    const viewButton = event.target.closest('[data-view-college]');
    if (viewButton) {
        window.location.href = `/colleges/${viewButton.dataset.viewCollege}`;
        return;
    }

    const shareButton = event.target.closest('.share-college');
    if (shareButton) {
        shareCollege(shareButton);
        return;
    }

    const saveButton = event.target.closest('.save-college');
    if (!saveButton) return;

    const collegeId = String(saveButton.dataset.collegeId);
    if (savedCollegeIds.has(collegeId)) {
        savedCollegeIds.delete(collegeId);
    } else {
        savedCollegeIds.add(collegeId);
    }

    localStorage.setItem('savedCollegeIds', JSON.stringify([...savedCollegeIds]));
    showColleges();
});

async function deleteCollege(id, collegeName) {
    if (!window.confirm(`Delete ${collegeName}? This cannot be undone.`)) return;

    try {
        const response = await fetch(`/api/colleges/${encodeURIComponent(id)}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Could not delete this college.');
        await loadColleges();
    } catch (error) {
        window.alert(error.message || 'Unable to delete this college.');
    }
}

async function shareCollege(button) {
    const collegeName = button.dataset.collegeName;
    const collegeUrl = new URL(`/colleges#college-${button.dataset.collegeId}`, window.location.origin).href;
    const shareData = {
        title: collegeName,
        text: `Check out ${collegeName}`,
        url: collegeUrl,
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }

        await navigator.clipboard.writeText(collegeUrl);
        showShareMessage(button, 'Link copied');
    } catch (error) {
        if (error.name !== 'AbortError') {
            showShareMessage(button, 'Could not share');
        }
    }
}

function showShareMessage(button, message) {
    const card = button.closest('.card');
    let notice = card.querySelector('.share-notice');

    if (!notice) {
        notice = document.createElement('span');
        notice.className = 'share-notice';
        notice.setAttribute('role', 'status');
        card.querySelector('.card-head').append(notice);
    }

    notice.textContent = message;
    window.setTimeout(() => notice.remove(), 2200);
}

const searchPanel = document.querySelector('#searchPanel');
const searchInput = document.querySelector('#spInput');
const searchResults = document.querySelector('#spResults');
const closeSearchPanel = () => {
    if (searchPanel) searchPanel.hidden = true;
    document.body.style.overflow = '';
};

document.querySelector('#openSearch')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (!searchPanel) return;
    searchPanel.hidden = false;
    document.body.style.overflow = 'hidden';
    searchInput?.focus();
});
document.querySelector('#spClose')?.addEventListener('click', closeSearchPanel);
searchPanel?.addEventListener('click', (event) => {
    if (event.target === searchPanel) closeSearchPanel();
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSearchPanel();
});

searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const matches = colleges.filter((college) => {
        const courseNames = getCourseDetails(college)
            .flatMap((course) => [
                course.name,
                course.degree,
                course.specialization,
                course.stream,
                course.exam
            ])
            .filter(Boolean);

        const searchText = [
            college.name,
            college.city,
            college.state,
            ...courseNames
        ]
            .join(' ')
            .toLocaleLowerCase();

        return searchText.includes(query);
    }).slice(0, 6);

    searchResults.innerHTML = query
        ? matches.map((college) => `<a class="sp-item" href="/colleges/${encodeURIComponent(college.id)}"><span>${escapeHtml(college.name)}</span><small>${escapeHtml(college.city)}, ${escapeHtml(college.state)}</small></a>`).join('')
        : '';
    if (query && !matches.length) searchResults.innerHTML = '<div class="sp-empty">No colleges found.</div>';
});

const topButton = document.querySelector('#toTop');
if (topButton) {
    window.addEventListener('scroll', () => { topButton.style.display = window.scrollY > 400 ? 'flex' : 'none'; });
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
const spInput = document.getElementById('spInput');
const spClose = document.getElementById('spClose');

spInput.addEventListener('input', function () {
    if (spInput.value.trim() !== '') {
        spClose.style.display = 'none';
    } else {
        spClose.style.display = 'block';
    }
});
loadColleges();

/* ==================== MOBILE FILTER SIDEBAR ==================== */

const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const filtersPanel = document.querySelector('.filters');

if (mobileFilterToggle && filtersPanel) {

    // Create overlay
    const filterOverlay = document.createElement('div');
    filterOverlay.className = 'filter-overlay';
    document.body.appendChild(filterOverlay);

    // Create sidebar heading + close button
    const filterHeader = document.createElement('div');
    filterHeader.className = 'filter-sidebar-close';

    filterHeader.innerHTML = `
        <span>Filters</span>
        <button type="button" aria-label="Close filters">×</button>
    `;

    filtersPanel.prepend(filterHeader);

    const filterCloseButton = filterHeader.querySelector('button');

    function openFilters() {
        filtersPanel.classList.add('filter-open');
        filterOverlay.classList.add('active');
        document.body.classList.add('filters-locked');
    }

    function closeFilters() {
        filtersPanel.classList.remove('filter-open');
        filterOverlay.classList.remove('active');
        document.body.classList.remove('filters-locked');
    }

    mobileFilterToggle.addEventListener('click', openFilters);

    filterCloseButton.addEventListener('click', closeFilters);

    filterOverlay.addEventListener('click', closeFilters);

    // Close with Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeFilters();
        }
    });

    // If screen becomes desktop size, reset mobile sidebar state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            closeFilters();
        }
    });
}