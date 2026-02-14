const popup = document.getElementById("skipPopup");

// Esperar que pase el título
setTimeout(() => {

    // Mostrar popup
    popup.classList.remove("hidden");

}, 4200);


// Luego redirigir
setTimeout(() => {

    window.location.href = "../html/ronda5.html";

}, 7200);
