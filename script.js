const logo = document.getElementById("header-logo");
const title = document.getElementById("header-title");
const content = document.getElementById("header-content");

logo.addEventListener("mouseenter", () => {
  title.classList.add("visible"); // Ajoute la classe visible
  content.classList.add("visible"); // Ajoute la classe visible
});
