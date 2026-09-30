const collegeForm = document.querySelector('#collegeForm');
const formMessage = document.querySelector('#formMessage');
const submitButton = document.querySelector('#submitButton');
const submitLabel = submitButton.querySelector('span');
const collegeId = document.body.dataset.collegeId;

if (collegeId) {
    document.querySelector('#formEyebrow').textContent = 'UPDATE DIRECTORY';
    document.querySelector('#formTitle').textContent = 'Edit college';
    document.querySelector('#sideTitle').textContent = 'Keep each campus story current.';
    document.querySelector('#sideDescription').textContent = 'Update this college’s profile so students can find accurate, helpful information.';
    submitLabel.textContent = 'Save changes';
    document.title = 'Edit college | CampusPath';
    loadCollegeForEdit();
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.hidden = false;
}

async function loadCollegeForEdit() {
    try {
        const response = await fetch(`/api/colleges/${collegeId}`, {
            headers: { Accept: 'application/json' },
        });
        const result = await response.json();

        if (!response.ok || !result.data) {
            throw new Error(result.message || 'Could not load this college.');
        }

        Object.entries(result.data).forEach(([key, value]) => {
            const field = collegeForm.elements.namedItem(key);
            if (field && value !== null) field.value = value;
        });
    } catch (error) {
        showFormMessage(error.message || 'Unable to load this college.', 'error');
    }
}

collegeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    formMessage.hidden = true;
    submitButton.disabled = true;
    submitLabel.textContent = 'Saving…';

    const formData = new FormData(collegeForm);
    const data = Object.fromEntries(formData.entries());

    Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'string') data[key] = data[key].trim();
        if (data[key] === '') data[key] = null;
    });

    try {
        const response = await fetch(collegeId ? `/api/colleges/${collegeId}` : '/api/colleges', {
            method: collegeId ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            const validationErrors = result.errors
                ? Object.values(result.errors).flat().join(' ')
                : result.message || 'Could not save the college. Please check the details and try again.';
            throw new Error(validationErrors);
        }

        showFormMessage(collegeId
            ? 'College updated successfully. Returning to the college list…'
            : 'College added successfully. Returning to the college list…', 'success');
        collegeForm.reset();
        window.setTimeout(() => { window.location.href = '/colleges'; }, 900);
    } catch (error) {
        showFormMessage(error.message || 'Unable to save the college. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitLabel.textContent = collegeId ? 'Save changes' : 'Add college';
    }
});
