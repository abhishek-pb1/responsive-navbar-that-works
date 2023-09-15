const navBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
});
