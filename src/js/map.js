function showMapModal(event) {
  const modal = document.getElementById("mapModal");
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100");
  moveMapModal(event);
}

function moveMapModal(event) {
  const modal = document.getElementById("mapModal");
  const offset = 20;
  modal.style.left = `${event.pageX + offset}px`;
  modal.style.top = `${event.pageY + offset}px`;
}

function hideMapModal() {
  const modal = document.getElementById("mapModal");
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.classList.remove("opacity-100");
}
