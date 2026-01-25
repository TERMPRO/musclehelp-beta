const modal = document.getElementById("modalContact");
const btn = document.getElementById("btnContact");
const span = document.querySelector(".close-btn");

// Ouvrir la fenêtre au clic
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la fenêtre quand on clique sur le (X)
span.onclick = function() {
    modal.style.display = "none";
}

// Fermer la fenêtre si on clique n'importe où en dehors de la boîte
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
