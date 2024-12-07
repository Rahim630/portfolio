const navIcon = document.getElementById("nav-icon4");
const nav = document.querySelector("nav");

// Function to close the navigation menu
function closeNav() {
  nav.classList.remove("active");
  navIcon.classList.remove("open");
}

// Toggle navigation menu and icon animation on click
navIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  navIcon.classList.toggle("open");
});

// Close nav when any nav link is clicked
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", closeNav);
});

// Close nav when clicking outside of it
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !navIcon.contains(e.target)) {
    closeNav();
  }
});
