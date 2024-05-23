//carousel slide effect
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);


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
