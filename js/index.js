/*--------------------------------------------------------------
Variables
--------------------------------------------------------------*/
// Bouton pour le menu principal
let btnFermeture = document.querySelector("#fermeture");
let btnOuverture = document.querySelector("#ouverture")
let leMenu = document.querySelector(".menu");

// Checkbox pour empêcher l'arrière-plan de défiler quand le menu est ouvert
let leBody = document.querySelector("body");


/*--------------------------------------------------------------
Évènements
--------------------------------------------------------------*/
// Menu principal ouverture/fermeture
btnOuverture.addEventListener("click", ouverture);
btnFermeture.addEventListener("click", fermeture);


/*--------------------------------------------------------------
Fonctions MOBILE
--------------------------------------------------------------*/
function ouverture() {
    // On ouvre le menu
    leMenu.style.transform = "translateX(0%)";

    // Empêche le body de défiler lorsque le menu est ouvert
    leBody.style.overflow = "hidden";
}

function fermeture() {
    // On ferme le menu
    leMenu.style.transform = "translateX(100%)";

    // Permet au body de continuer son défilement lorsque le menu est fermé
    leBody.style.overflowY = "scroll";
    leBody.style.overflowX = "hidden"
}