//carousel slide effect
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
  showSlide(currentSlide + 1);
}
function prevSlide() {
  showSlide(currentSlide - 1);
}
showSlide(currentSlide);

//navbar hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".navLinks");
  const navIcons = document.querySelector(".navIcons");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    navIcons.classList.toggle("active");
  });
});
