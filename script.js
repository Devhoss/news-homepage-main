const openMenuIcon = document.getElementById("open-menu-icon");
const closeMenuIcon = document.getElementById("close-menu-icon");
const mobileNavLinks = document.getElementById("mobile-nav-links");
const body = document.getElementById("body");
const headerImage = document.querySelector(".header-img");

openMenuIcon.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("show-menu");
  openMenuIcon.classList.add("hide");
  closeMenuIcon.classList.add("show");
  body.classList.add("blend-mode");
  headerImage.classList.add("blend-mode");
});

closeMenuIcon.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("show-menu");
  openMenuIcon.classList.remove("hide");
  closeMenuIcon.classList.remove("show");
  body.classList.remove("blend-mode");
  headerImage.classList.remove("blend-mode");
});
