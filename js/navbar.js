// Handle scrolling behavior for hiding and showing navbar
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("hidden");
    navLinks.classList.remove("active");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});


// Toggle the mobile navigation menu
hamburgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
navLinks.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
