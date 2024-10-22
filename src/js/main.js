// src/js/main.js
import HomePage from "../pages/home.page.js";
import AboutPage from "../pages/about.page.js";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
};

function renderPage(path) {
  const app = document.getElementById("app");
  const page = routes[path] ? routes[path]() : `<h2>Page non trouvée</h2>`;
  app.innerHTML = page;
}

function handleRoute() {
  const path = window.location.pathname;
  renderPage(path);
}

// Initial render
window.addEventListener("DOMContentLoaded", handleRoute);

// Handle navigation
window.addEventListener("popstate", handleRoute);

// Optional: Example of changing route
document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    window.history.pushState({}, "", path);
    renderPage(path);
  }
});
