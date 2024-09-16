const nav = document.getElementById("nav");
const menuBurger = document.getElementById("burger");

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBurger.classList.toggle("active");
});

// Fonction pour afficher ou masquer la flèche en fonction du défilement
function toggleScrollTopButton() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (window.scrollY > 500 && scrollButton.style.display !== "block") {
    scrollButton.style.display = "block";
  } else if (window.scrollY <= 500 && scrollButton.style.display !== "none") {
    scrollButton.style.display = "none";
  }
}

// Fonction pour faire défiler doucement vers le haut de la page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Écoutez l'événement de défilement de la fenêtre
window.addEventListener("scroll", toggleScrollTopButton);

// Écoutez l'événement de chargement de la page
window.addEventListener("load", function () {
  setTimeout(toggleScrollTopButton, 100);
});

// Écoutez l'événement de clic sur la flèche
document
  .querySelector("#scroll-to-top a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
  });

// Sélectionnez tous les liens vers les sections de votre navigation
var sectionLinks = document.querySelectorAll("a[href^='#']");

// Parcourez chaque lien et ajoutez un écouteur d'événements pour gérer le clic
sectionLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement de clic par défaut

    // Obtenez l'ID de la section cible à partir de l'attribut href du lien
    var targetId = this.getAttribute("href").substring(1);

    // Sélectionnez la section cible
    var targetSection = document.getElementById(targetId);

    // Faites défiler la fenêtre jusqu'à la section cible avec une animation fluide
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start", // Fait en sorte que le début de la section soit aligné avec le haut de la fenêtre
    });
  });
});
