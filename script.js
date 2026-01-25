// On attend que la page soit bien chargée
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modalContact");
    const btn = document.getElementById("btnContact");
    const span = document.querySelector(".close-btn");

    // Vérifie si les éléments existent avant d'ajouter l'événement
    if (btn && modal && span) {
        // Ouvrir la fenêtre au clic
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // Fermer la fenêtre quand on clique sur le (X)
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Fermer la fenêtre si on clique en dehors de la boîte
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Erreur : Un des éléments du formulaire est introuvable dans le HTML.");
    }
});
