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
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
    navIcons.classList.toggle("active");
  });
});

//modal function
const modal = document.getElementById("cvModal");
const btn = document.getElementById("cvBtn");
const span = document.getElementsByClassName("close")[0];
//open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
//close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//close when click outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//confirmation email message
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  if (success === 'true') {
    document.getElementById('confirm-message').style.display = 'block';
  } else if (success === 'false') {
    document.getElementById('error-message').style.display = 'block';
  }
});