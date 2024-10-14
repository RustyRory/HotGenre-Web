document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le carrousel
  var carousel = new bootstrap.Carousel(document.querySelector("#content"), {
    interval: false, // désactiver le défilement automatique
  });

  // Ajouter des écouteurs sur chaque lien de navigation
  document
    .querySelectorAll(".nav-link[data-bs-slide-to]")
    .forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // éviter le comportement par défaut du lien

        // Récupérer l'index de la diapositive à afficher
        var slideIndex = link.getAttribute("data-bs-slide-to");

        // Activer la diapositive correspondante
        carousel.to(slideIndex);

        // Effectuer un défilement fluide jusqu'au carrousel
        document
          .querySelector("#content")
          .scrollIntoView({ behavior: "smooth" });
      });
    });
});

// Récupère les éléments du titre et du menu dropdown
const titleElement = document.getElementById("dropdownTitle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownContainer = document.querySelector(".dropdown");

// Affiche le dropdown lors du survol du titre
titleElement.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show"); // Ajoute la classe 'show' pour afficher le menu
});

// Cache le dropdown lorsque la souris quitte le titre ou le menu
dropdownContainer.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("show"); // Retire la classe 'show' pour cacher le menu
});

// Ajout d'un événement mouseover sur le menu pour éviter qu'il disparaisse
dropdownMenu.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show");
});

// Ajout d'un événement mouseout sur le menu
dropdownMenu.addEventListener("mouseout", function () {
  dropdownMenu.classList.remove("show");
});
