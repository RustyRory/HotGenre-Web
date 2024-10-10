document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner le carrousel
  var carousel = new bootstrap.Carousel(document.querySelector("#content"), {
    ride: false, // désactiver le défilement automatique
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
