const modals = {
    services: document.getElementById("servicesModal"),
    skills: document.getElementById("skillsModal"),
    education: document.getElementById("educationModal"),
    experience: document.getElementById("experienceModal"),
    contact: document.getElementById("contactModal")
};

const overlay = document.querySelector(".modal-overlay");

// Function to open a specific modal
function openModal(modal) {
    modal.classList.add("active");
    overlay.classList.add("active");
}

// Function to close all modals
function closeModals() {
    Object.values(modals).forEach(modal => modal.classList.remove("active"));
    overlay.classList.remove("active");
}

// Event listeners for opening modals
document.querySelector(".services-link").onclick = () => openModal(modals.services);
document.querySelector(".skills-link").onclick = () => openModal(modals.skills);
document.querySelector(".education-link").onclick = () => openModal(modals.education);
document.querySelector(".experience-link").onclick = () => openModal(modals.experience);
document.querySelector(".contact-link").onclick = () => openModal(modals.contact);

// Event listeners for closing modals
overlay.onclick = closeModals;
document.querySelectorAll(".close").forEach(button => button.onclick = closeModals);
