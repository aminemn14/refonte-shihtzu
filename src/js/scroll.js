document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main > section");

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnScroll, {
    threshold: 0.1,
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function fadeInDownNavbar() {
  const navbar = document.getElementById("navbar");

  navbar.classList.add("opacity-0", "-translate-y-full");

  if (!sessionStorage.getItem("navbarAnimationPlayed")) {
    navbar.style.transition = "opacity 700ms ease-in, transform 700ms ease-out";

    setTimeout(() => {
      navbar.classList.remove("opacity-0", "-translate-y-full");
      navbar.classList.add("opacity-100", "translate-y-0");
    }, 50);

    sessionStorage.setItem("navbarAnimationPlayed", "true");
  } else {
    navbar.classList.add("opacity-100", "translate-y-0");
  }
}

window.onload = fadeInDownNavbar;
