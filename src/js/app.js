$(document).ready(function () {
  var mySwiper = new Swiper(".gallery-top", {
    spaceBetween: 20,
    slidesPerView: 3,
    parallax: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
});

function calculateExperience() {
  const currentYear = new Date().getFullYear();
  const startYear = 1975;
  const experienceYears = currentYear - startYear;

  document.getElementById("year-calculator").textContent = experienceYears;
}

// S'assurer que la fonction se charge après le DOM
document.addEventListener("DOMContentLoaded", calculateExperience);