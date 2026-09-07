// Hamburger menu toggle for mobile navbar
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
});
