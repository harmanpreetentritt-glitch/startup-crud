document.addEventListener("DOMContentLoaded", function () {

    const courseButtons = document.querySelectorAll(".course-name");

    const modal = document.getElementById("courseModal");

    const closeModal = document.getElementById("closeModal");

    const closeButton = document.getElementById("closeButton");


    const modalCourseName = document.getElementById("modalCourseName");

    const modalStartDate = document.getElementById("modalStartDate");

    const modalEndDate = document.getElementById("modalEndDate");

    const modalLength = document.getElementById("modalLength");

    const modalDuration = document.getElementById("modalDuration");

    const modalSubjects = document.getElementById("modalSubjects");


    /* ================= OPEN MODAL ================= */

    courseButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const courseName = button.dataset.course;
            const startDate = button.dataset.start;
            const endDate = button.dataset.end;
            const length = button.dataset.length;
            const duration = button.dataset.duration;

            const subjects = JSON.parse(button.dataset.subjects);


            // Course information

            modalCourseName.textContent = courseName;

            modalStartDate.textContent = startDate;

            modalEndDate.textContent = endDate;

            modalLength.textContent = length;

            modalDuration.textContent = duration;


            // Clear old subjects

            modalSubjects.innerHTML = "";


            // Add subjects

            if (subjects.length > 0) {

                subjects.forEach(function (subject) {

                    const subjectItem = document.createElement("div");

                    subjectItem.classList.add("subject-item");

                    subjectItem.textContent = subject;

                    modalSubjects.appendChild(subjectItem);

                });

            } else {

                const noSubject = document.createElement("div");

                noSubject.classList.add("subject-item");

                noSubject.textContent = "No subjects available";

                modalSubjects.appendChild(noSubject);

            }


            // Show modal

            modal.style.display = "flex";

        });

    });


    /* ================= CLOSE MODAL ================= */

    closeModal.addEventListener("click", function () {

        modal.style.display = "none";

    });


    closeButton.addEventListener("click", function () {

        modal.style.display = "none";

    });


    /* ================= CLICK OUTSIDE ================= */

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    });


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            modal.style.display = "none";

        }

    });

});