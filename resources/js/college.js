
let colleges = [];
let currentPage = 1;
const itemsPerPage = 10;

// Load colleges from API
async function loadColleges() {
    const list = document.getElementById('list');

    try {
        const response = await fetch('/api/colleges', {
            headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();

        // Support both direct arrays and Laravel JSON responses
        if (Array.isArray(result)) {
            colleges = result;
        } else if (Array.isArray(result.data)) {
            colleges = result.data;
        } else {
            throw new Error('Invalid API response format');
        }

        renderFilters();
        showColleges();
    } catch (error) {
        console.error('Error loading colleges:', error);
        list.innerHTML =
            '<div class="empty">Unable to load colleges. Check the browser console.</div>';
        document.getElementById('pagination').innerHTML = '';
    }
}

// Render college cards and pagination

function showColleges(resetPage = true) {
    const list = document.getElementById('list');

    if (!list) {
        console.error('Missing HTML element: #list');
        return;
    }

    try {
        const filteredColleges = colleges.filter(collegeMatchesFilters);

        if (resetPage) {
            currentPage = 1;
        }

        const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
        currentPage = Math.max(1, Math.min(currentPage, totalPages || 1));

        const start = (currentPage - 1) * itemsPerPage;
        const pageColleges = filteredColleges.slice(
            start,
            start + itemsPerPage
        );

        list.innerHTML = pageColleges.length
            ? pageColleges.map(makeCard).join('')
            : '<div class="empty">No colleges match these filters.</div>';

        renderPagination(totalPages);

        if (typeof renderFilterChips === 'function') {
            renderFilterChips();
        }
    } catch (error) {
        console.error('Error rendering colleges:', error);
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
