/**
 * CampusPath - College Module CRUD & Directory Script
 */

// State
let colleges = [];
let collegeIdToDelete = null;
let activeFilters = {
    search: '',
    types: [],
    states: [],
    mode: 'all' // 'all', 'public', 'private'
};

// DOM Elements
const listEl = document.querySelector('#list');
const countEl = document.querySelector('#count');
const filtersEl = document.querySelector('#filters');
const chipsEl = document.querySelector('#chips');
const modalBackdrop = document.querySelector('#collegeModalBackdrop');
const deleteModalBackdrop = document.querySelector('#deleteModalBackdrop');
const collegeForm = document.querySelector('#collegeForm');
const quickSearchInput = document.querySelector('#quickSearchInput');
const spInput = document.querySelector('#spInput');
const searchPanel = document.querySelector('#searchPanel');

// CSRF Token Helper
function getCsrfToken() {
    const meta = document.querySelector('meta[name="csrf-token"]');
    return meta ? meta.getAttribute('content') : '';
}

// Show Toast Notification
function showToast(message, type = 'success') {
    const container = document.querySelector('#toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✓' : '⚠'}</span>
        <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4000);
}

// Escape HTML helper
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Load colleges from API
async function loadColleges() {
    try {
        if (listEl) {
            listEl.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>Loading colleges from database...</p>
                </div>
            `;
        }

        const response = await fetch('/api/colleges', {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch colleges (HTTP ${response.status})`);
        }

        const result = await response.json();
        colleges = Array.isArray(result.data) ? result.data : (Array.isArray(result) ? result : []);

        renderFilters();
        renderColleges();

    } catch (error) {
        console.error('Error loading colleges:', error);
        if (listEl) {
            listEl.innerHTML = `
                <div class="empty">
                    <p>Unable to load colleges from database.</p>
                    <button class="btn btn-primary" onclick="loadColleges()" style="margin-top: 12px;">Retry</button>
                </div>
            `;
        }
        if (countEl) countEl.textContent = 'Error loading colleges';
    }
}

// Filter matching logic
function passesFilters(college) {
    // Mode filter (all, public, private)
    if (activeFilters.mode === 'public') {
        if (!college.type || !college.type.toLowerCase().includes('public') && !college.type.toLowerCase().includes('government')) {
            return false;
        }
    } else if (activeFilters.mode === 'private') {
        if (!college.type || !college.type.toLowerCase().includes('private')) {
            return false;
        }
    }

    // Search query (name, city, state, description)
    if (activeFilters.search) {
        const q = activeFilters.search.toLowerCase();
        const matchesName = (college.name || '').toLowerCase().includes(q);
        const matchesCity = (college.city || '').toLowerCase().includes(q);
        const matchesState = (college.state || '').toLowerCase().includes(q);
        const matchesType = (college.type || '').toLowerCase().includes(q);

        if (!matchesName && !matchesCity && !matchesState && !matchesType) {
            return false;
        }
    }

    // Type filter
    if (activeFilters.types.length > 0) {
        if (!college.type || !activeFilters.types.includes(college.type)) {
            return false;
        }
    }

    // State filter
    if (activeFilters.states.length > 0) {
        if (!college.state || !activeFilters.states.includes(college.state)) {
            return false;
        }
    }

    return true;
}

// Render dynamic filter sidebar
function renderFilters() {
    if (!filtersEl) return;

    if (colleges.length === 0) {
        filtersEl.innerHTML = `
            <div class="fbox">
                <h3>Filters <b class="chev"></b></h3>
                <div class="fbody">
                    <p style="color: var(--mut); font-size: 13px; margin: 0;">Add colleges to see available filters.</p>
                </div>
            </div>
        `;
        return;
    }

    // Count types
    const typeCounts = {};
    const stateCounts = {};

    colleges.forEach(c => {
        if (c.type) {
            typeCounts[c.type] = (typeCounts[c.type] || 0) + 1;
        }
        if (c.state) {
            stateCounts[c.state] = (stateCounts[c.state] || 0) + 1;
        }
    });

    const typeList = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
    const stateList = Object.entries(stateCounts).sort((a, b) => b[1] - a[1]);

    let html = '';

    // Type filter box
    if (typeList.length > 0) {
        html += `
            <div class="fbox" id="box-type">
                <h3 data-toggle="type">Institute Type <b class="chev"></b></h3>
                <div class="fbody">
                    <div class="opts">
                        ${typeList.map(([type, count]) => {
                            const checked = activeFilters.types.includes(type) ? 'checked' : '';
                            return `
                                <label class="opt c">
                                    <input type="checkbox" data-filter="type" value="${escapeHtml(type)}" ${checked}>
                                    <i></i>${escapeHtml(type)} <span>(${count})</span>
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // State filter box
    if (stateList.length > 0) {
        html += `
            <div class="fbox" id="box-state">
                <h3 data-toggle="state">State <b class="chev"></b></h3>
                <div class="fbody">
                    <div class="opts">
                        ${stateList.map(([state, count]) => {
                            const checked = activeFilters.states.includes(state) ? 'checked' : '';
                            return `
                                <label class="opt c">
                                    <input type="checkbox" data-filter="state" value="${escapeHtml(state)}" ${checked}>
                                    <i></i>${escapeHtml(state)} <span>(${count})</span>
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    filtersEl.innerHTML = html;
}

// Render active filter chips
function renderChips() {
    if (!chipsEl) return;

    let chipsHtml = '';

    if (activeFilters.search) {
        chipsHtml += `
            <button class="chip" data-remove-search>
                Search: "${escapeHtml(activeFilters.search)}" ✕
            </button>
        `;
    }

    activeFilters.types.forEach(type => {
        chipsHtml += `
            <button class="chip" data-remove-type="${escapeHtml(type)}">
                Type: ${escapeHtml(type)} ✕
            </button>
        `;
    });

    activeFilters.states.forEach(state => {
        chipsHtml += `
            <button class="chip" data-remove-state="${escapeHtml(state)}">
                State: ${escapeHtml(state)} ✕
            </button>
        `;
    });

    chipsEl.innerHTML = chipsHtml;
}

// Generate single college card HTML
function makeCard(college) {
    const initials = (college.name || 'C')
        .split(' ')
        .filter(w => w.length > 0)
        .slice(0, 3)
        .map(w => w[0].toUpperCase())
        .join('');

    let typeBadgeClass = 'badge-tag type-other';
    const typeLower = (college.type || '').toLowerCase();
    if (typeLower.includes('public') || typeLower.includes('gov')) {
        typeBadgeClass = 'badge-tag type-public';
    } else if (typeLower.includes('private')) {
        typeBadgeClass = 'badge-tag type-private';
    } else if (typeLower.includes('autonomous')) {
        typeBadgeClass = 'badge-tag type-autonomous';
    }

    return `
        <article class="card" data-id="${college.id}">
            <div class="card-head">
                <div>
                    <h3>${escapeHtml(college.name)}</h3>
                </div>
                <div class="icons">
                    <button type="button" title="Share" onclick="navigator.clipboard?.writeText(window.location.href); showToast('Link copied to clipboard!');">➦</button>
                    <button type="button" class="heart-btn" title="Save" onclick="this.classList.toggle('on');">♡</button>
                </div>
            </div>

            <div class="card-body">
                <div class="cimg">
                    ${college.logo ? `
                        <img class="college-logo-img" src="${escapeHtml(college.logo)}" alt="${escapeHtml(college.name)}" onerror="this.outerHTML='<div class=\\'college-avatar-fallback\\'>${initials}<small>${escapeHtml(college.city || '')}</small></div>';">
                    ` : `
                        <div class="college-avatar-fallback">
                            ${initials}
                            <small>${escapeHtml(college.city || '')}</small>
                        </div>
                    `}
                </div>

                <div class="cinfo">
                    <div class="meta">
                        <span>📍 <strong>${escapeHtml(college.city)}</strong>, ${escapeHtml(college.state)}</span>
                        ${college.type ? `<span><span class="${typeBadgeClass}">⚑ ${escapeHtml(college.type)}</span></span>` : ''}
                        ${college.established_year ? `<span>🏛 Established <strong>${college.established_year}</strong></span>` : ''}
                    </div>

                    ${college.description ? `
                        <div class="college-desc">
                            ${escapeHtml(college.description)}
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="card-foot">
                <nav>
                    ${college.website ? `
                        <a href="${escapeHtml(college.website)}" target="_blank" rel="noopener noreferrer" class="btn-card-website">
                            ↗ Official Website
                        </a>
                    ` : `
                        <span style="color: var(--mut); font-size: 13px;">CampusPath Registered College</span>
                    `}
                </nav>

                <div class="card-actions-row">
                    <button type="button" class="btn-card-edit" data-edit-id="${college.id}">
                        ✏ Edit
                    </button>
                    <button type="button" class="btn-card-delete" data-delete-id="${college.id}" data-name="${escapeHtml(college.name)}">
                        🗑 Delete
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Render colleges in the list
function renderColleges() {
    if (!listEl) return;

    renderChips();

    // If total colleges is 0
    if (colleges.length === 0) {
        listEl.innerHTML = `
            <div class="empty-colleges">
                <div class="empty-icon">🏛️</div>
                <h3>No Colleges Found in Database</h3>
                <p>Get started by adding your first college with its location, established year, website, and details.</p>
                <button type="button" class="btn btn-primary" onclick="openAddModal()">
                    + Add First College
                </button>
            </div>
        `;
        if (countEl) countEl.textContent = 'Showing 0 Colleges';
        return;
    }

    const filtered = colleges.filter(passesFilters);

    if (filtered.length === 0) {
        listEl.innerHTML = `
            <div class="empty">
                <h3>No colleges match your criteria</h3>
                <p>Try clearing filters or search terms to see available institutions.</p>
                <button class="btn btn-secondary" onclick="resetFilters()" style="margin-top: 10px;">Clear Filters</button>
            </div>
        `;
        if (countEl) countEl.textContent = 'Showing 0 Colleges in India';
        return;
    }

    let cardsHtml = '';
    filtered.forEach(college => {
        cardsHtml += makeCard(college);
    });

    listEl.innerHTML = cardsHtml;
    if (countEl) {
        countEl.textContent = `Showing ${filtered.length} of ${colleges.length} Colleges in India`;
    }
}

// Reset filters
function resetFilters() {
    activeFilters.search = '';
    activeFilters.types = [];
    activeFilters.states = [];
    activeFilters.mode = 'all';

    if (quickSearchInput) quickSearchInput.value = '';
    document.querySelectorAll('input[name="mode"]').forEach(r => r.checked = r.value === 'all');

    renderFilters();
    renderColleges();
}

// Modal Form handling (Add / Edit)
function openAddModal() {
    if (!modalBackdrop) return;

    document.querySelector('#modalTitle').textContent = 'Add New College';
    document.querySelector('#btnText').textContent = 'Save College';
    document.querySelector('#collegeId').value = '';

    collegeForm.reset();
    clearErrors();

    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';

    const firstInput = document.querySelector('#collegeName');
    if (firstInput) setTimeout(() => firstInput.focus(), 50);
}

function openEditModal(id) {
    const college = colleges.find(c => String(c.id) === String(id));
    if (!college || !modalBackdrop) return;

    document.querySelector('#modalTitle').textContent = 'Edit College';
    document.querySelector('#btnText').textContent = 'Update College';
    document.querySelector('#collegeId').value = college.id;

    document.querySelector('#collegeName').value = college.name || '';
    document.querySelector('#collegeCity').value = college.city || '';
    document.querySelector('#collegeState').value = college.state || '';
    document.querySelector('#collegeType').value = college.type || '';
    document.querySelector('#collegeEstablished').value = college.established_year || '';
    document.querySelector('#collegeWebsite').value = college.website || '';
    document.querySelector('#collegeLogo').value = college.logo || '';
    document.querySelector('#collegeDescription').value = college.description || '';

    clearErrors();

    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';

    const firstInput = document.querySelector('#collegeName');
    if (firstInput) setTimeout(() => firstInput.focus(), 50);
}

function closeModal() {
    if (modalBackdrop) modalBackdrop.hidden = true;
    document.body.style.overflow = '';
    clearErrors();
}

function clearErrors() {
    const alert = document.querySelector('#formErrorAlert');
    if (alert) {
        alert.hidden = true;
        alert.innerHTML = '';
    }

    document.querySelectorAll('.field-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });

    document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
    });
}

function showFieldError(field, message) {
    const errorEl = document.querySelector(`#${field}Error`);
    const inputEl = document.querySelector(`[name="${field}"]`);

    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
    if (inputEl) {
        inputEl.classList.add('is-invalid');
    }
}

// Form Submit Handler
async function handleCollegeSubmit(e) {
    e.preventDefault();
    clearErrors();

    const id = document.querySelector('#collegeId').value;
    const isEdit = Boolean(id);

    const name = document.querySelector('#collegeName').value.trim();
    const city = document.querySelector('#collegeCity').value.trim();
    const state = document.querySelector('#collegeState').value.trim();
    const type = document.querySelector('#collegeType').value.trim();
    const establishedYear = document.querySelector('#collegeEstablished').value.trim();
    const website = document.querySelector('#collegeWebsite').value.trim();
    const logo = document.querySelector('#collegeLogo').value.trim();
    const description = document.querySelector('#collegeDescription').value.trim();

    // Client validation
    let hasClientErrors = false;
    if (!name) {
        showFieldError('name', 'Please enter the college name.');
        hasClientErrors = true;
    }
    if (!city) {
        showFieldError('city', 'Please enter the city.');
        hasClientErrors = true;
    }
    if (!state) {
        showFieldError('state', 'Please enter the state.');
        hasClientErrors = true;
    }

    if (establishedYear && (parseInt(establishedYear, 10) < 1800 || parseInt(establishedYear, 10) > 2099)) {
        showFieldError('establishedYear', 'Established year must be between 1800 and 2099.');
        hasClientErrors = true;
    }

    if (website && !/^https?:\/\//i.test(website)) {
        showFieldError('website', 'Website URL must begin with http:// or https://');
        hasClientErrors = true;
    }

    if (hasClientErrors) return;

    // Show button loading state
    const saveBtn = document.querySelector('#saveCollegeBtn');
    const spinner = document.querySelector('#btnSpinner');
    const btnText = document.querySelector('#btnText');

    if (saveBtn) saveBtn.disabled = true;
    if (spinner) spinner.hidden = false;
    if (btnText) btnText.textContent = isEdit ? 'Updating...' : 'Saving...';

    const payload = {
        name,
        city,
        state,
        type: type || null,
        established_year: establishedYear ? parseInt(establishedYear, 10) : null,
        website: website || null,
        logo: logo || null,
        description: description || null
    };

    try {
        const url = isEdit ? `/api/colleges/${id}` : '/api/colleges';
        const method = isEdit ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': getCsrfToken()
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.status === 422) {
            // Validation errors from Laravel
            if (data.errors) {
                Object.entries(data.errors).forEach(([field, msgs]) => {
                    const fieldMap = {
                        'established_year': 'establishedYear',
                    };
                    const mappedField = fieldMap[field] || field;
                    showFieldError(mappedField, msgs[0]);
                });
            }
            const alert = document.querySelector('#formErrorAlert');
            if (alert) {
                alert.textContent = data.message || 'Please correct the errors in the form.';
                alert.hidden = false;
            }
            return;
        }

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong while saving college.');
        }

        // Success!
        closeModal();
        showToast(isEdit ? 'College updated successfully!' : 'College added successfully!', 'success');

        await loadColleges();

        // Highlight new or updated card
        const cardId = data.data?.id || id;
        if (cardId) {
            const card = document.querySelector(`.card[data-id="${cardId}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.boxShadow = '0 0 0 3px #3b4cd9';
                setTimeout(() => { card.style.boxShadow = ''; }, 2500);
            }
        }

    } catch (err) {
        console.error('Save error:', err);
        const alert = document.querySelector('#formErrorAlert');
        if (alert) {
            alert.textContent = err.message || 'Failed to save college. Please try again.';
            alert.hidden = false;
        }
    } finally {
        if (saveBtn) saveBtn.disabled = false;
        if (spinner) spinner.hidden = true;
        if (btnText) btnText.textContent = isEdit ? 'Update College' : 'Save College';
    }
}

// Delete Confirmation Modal Handling
function openDeleteModal(id, name) {
    if (!deleteModalBackdrop) return;

    collegeIdToDelete = id;
    const nameEl = document.querySelector('#deleteCollegeName');
    if (nameEl) nameEl.textContent = `"${name}"`;

    deleteModalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeDeleteModal() {
    if (deleteModalBackdrop) deleteModalBackdrop.hidden = true;
    document.body.style.overflow = '';
    collegeIdToDelete = null;
}

async function confirmDelete() {
    if (!collegeIdToDelete) return;

    const confirmBtn = document.querySelector('#confirmDeleteBtn');
    if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = 'Deleting...';
    }

    try {
        const response = await fetch(`/api/colleges/${collegeIdToDelete}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': getCsrfToken()
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to delete college');
        }

        closeDeleteModal();
        showToast('College deleted successfully', 'success');
        await loadColleges();

    } catch (err) {
        console.error('Delete error:', err);
        showToast(err.message || 'Error deleting college', 'error');
    } finally {
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.textContent = 'Delete College';
        }
    }
}

// Global Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
    // Initial fetch
    loadColleges();

    // Add College Modal Button
    const addBtn = document.querySelector('#openAddModalBtn');
    if (addBtn) addBtn.addEventListener('click', openAddModal);

    // Modal Close Buttons
    const closeBtn = document.querySelector('#closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const cancelBtn = document.querySelector('#cancelModalBtn');
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    // Delete Modal Buttons
    const closeDeleteBtn = document.querySelector('#closeDeleteModalBtn');
    if (closeDeleteBtn) closeDeleteBtn.addEventListener('click', closeDeleteModal);

    const cancelDeleteBtn = document.querySelector('#cancelDeleteBtn');
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', closeDeleteModal);

    const confirmDeleteBtn = document.querySelector('#confirmDeleteBtn');
    if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', confirmDelete);

    if (deleteModalBackdrop) {
        deleteModalBackdrop.addEventListener('click', (e) => {
            if (e.target === deleteModalBackdrop) closeDeleteModal();
        });
    }

    // Escape Key to close modals
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
            if (searchPanel) searchPanel.hidden = true;
        }
    });

    // Form Submit
    if (collegeForm) {
        collegeForm.addEventListener('submit', handleCollegeSubmit);
    }

    // Delegation for Edit & Delete on Cards
    if (listEl) {
        listEl.addEventListener('click', (e) => {
            const editBtn = e.target.closest('[data-edit-id]');
            if (editBtn) {
                const id = editBtn.getAttribute('data-edit-id');
                openEditModal(id);
                return;
            }

            const deleteBtn = e.target.closest('[data-delete-id]');
            if (deleteBtn) {
                const id = deleteBtn.getAttribute('data-delete-id');
                const name = deleteBtn.getAttribute('data-name') || 'this college';
                openDeleteModal(id, name);
                return;
            }
        });
    }

    // Quick Search Input
    if (quickSearchInput) {
        quickSearchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value.trim();
            renderColleges();
        });
    }

    // Mode Radio Buttons (all, public, private)
    document.querySelectorAll('input[name="mode"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            activeFilters.mode = e.target.value;
            renderColleges();
        });
    });

    // Dynamic Filter Checkbox Changes
    if (filtersEl) {
        filtersEl.addEventListener('change', (e) => {
            const input = e.target;
            const filterKey = input.dataset.filter;
            if (!filterKey) return;

            if (filterKey === 'type') {
                if (input.checked) {
                    if (!activeFilters.types.includes(input.value)) activeFilters.types.push(input.value);
                } else {
                    activeFilters.types = activeFilters.types.filter(v => v !== input.value);
                }
            } else if (filterKey === 'state') {
                if (input.checked) {
                    if (!activeFilters.states.includes(input.value)) activeFilters.states.push(input.value);
                } else {
                    activeFilters.states = activeFilters.states.filter(v => v !== input.value);
                }
            }

            renderColleges();
        });

        // Fold / Unfold filter box
        filtersEl.addEventListener('click', (e) => {
            const title = e.target.closest('[data-toggle]');
            if (title) {
                const box = title.closest('.fbox');
                if (box) box.classList.toggle('closed');
            }
        });
    }

    // Remove Chip Click
    if (chipsEl) {
        chipsEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.chip');
            if (!btn) return;

            if (btn.hasAttribute('data-remove-search')) {
                activeFilters.search = '';
                if (quickSearchInput) quickSearchInput.value = '';
            } else if (btn.hasAttribute('data-remove-type')) {
                const val = btn.getAttribute('data-remove-type');
                activeFilters.types = activeFilters.types.filter(t => t !== val);
            } else if (btn.hasAttribute('data-remove-state')) {
                const val = btn.getAttribute('data-remove-state');
                activeFilters.states = activeFilters.states.filter(s => s !== val);
            }

            renderFilters();
            renderColleges();
        });
    }

    // Read More Toggle
    const readMoreBtn = document.querySelector('#readMore');
    const introText = document.querySelector('#introText');
    if (readMoreBtn && introText) {
        readMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            introText.classList.toggle('clamp');
            readMoreBtn.textContent = introText.classList.contains('clamp') ? 'Read More' : 'Read Less';
        });
    }

    // Top button
    const toTopBtn = document.querySelector('#toTop');
    if (toTopBtn) {
        window.addEventListener('scroll', () => {
            toTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Top Search Panel
    const openSearchBtn = document.querySelector('#openSearch');
    const spCloseBtn = document.querySelector('#spClose');
    const spResults = document.querySelector('#spResults');

    if (openSearchBtn && searchPanel) {
        openSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchPanel.hidden = false;
            if (spInput) {
                spInput.value = '';
                spInput.focus();
            }
            if (spResults) spResults.innerHTML = '';
            document.body.style.overflow = 'hidden';
        });
    }

    if (spCloseBtn && searchPanel) {
        spCloseBtn.addEventListener('click', () => {
            searchPanel.hidden = true;
            document.body.style.overflow = '';
        });
    }

    if (searchPanel) {
        searchPanel.addEventListener('click', (e) => {
            if (e.target === searchPanel) {
                searchPanel.hidden = true;
                document.body.style.overflow = '';
            }
        });
    }

    if (spInput && spResults) {
        spInput.addEventListener('input', (e) => {
            const q = e.target.value.trim().toLowerCase();
            if (!q) {
                spResults.innerHTML = '';
                return;
            }

            const matches = colleges.filter(c =>
                (c.name || '').toLowerCase().includes(q) ||
                (c.city || '').toLowerCase().includes(q) ||
                (c.state || '').toLowerCase().includes(q)
            ).slice(0, 6);

            if (matches.length === 0) {
                spResults.innerHTML = '<div class="sp-empty">No colleges found matching keyword.</div>';
                return;
            }

            spResults.innerHTML = matches.map(c => `
                <div class="sp-item" data-select-id="${c.id}">
                    <span>${escapeHtml(c.name)}</span>
                    <small>${escapeHtml(c.city)}, ${escapeHtml(c.state)}</small>
                </div>
            `).join('');
        });

        spResults.addEventListener('click', (e) => {
            const item = e.target.closest('[data-select-id]');
            if (!item) return;

            const id = item.getAttribute('data-select-id');
            const college = colleges.find(c => String(c.id) === String(id));

            if (college) {
                searchPanel.hidden = true;
                document.body.style.overflow = '';

                activeFilters.search = college.name;
                if (quickSearchInput) quickSearchInput.value = college.name;

                renderColleges();

                setTimeout(() => {
                    const card = document.querySelector(`.card[data-id="${id}"]`);
                    if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.boxShadow = '0 0 0 3px #3b4cd9';
                        setTimeout(() => { card.style.boxShadow = ''; }, 2000);
                    }
                }, 100);
            }
        });
    }
});

// Export helper to global for inline onclicks
window.loadColleges = loadColleges;
window.openAddModal = openAddModal;
window.resetFilters = resetFilters;