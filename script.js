
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isExpanded);
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
