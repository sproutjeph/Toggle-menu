const menuBtn = document.querySelector(".menu-btn");
const menuToggle = document.querySelector(".menu-toggle");

menuBtn.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
});
