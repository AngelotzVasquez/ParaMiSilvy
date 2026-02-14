// Seleccionamos los elementos
const mainBtn = document.getElementById('ContBtn');
const modal = document.getElementById('miModal');
const confirmarBtn = document.getElementById('confirmarBtn');
const cancelarBtn = document.getElementById('cancelarBtn');

// 1. Abrir modal al tocar el botón principal
mainBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Cambia de 'none' a 'flex' para mostrarlo
});

// 2. Si dice que NO, cerramos el modal
cancelarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 3. Si dice que SÍ, aquí es donde pasas a la siguiente parte
// 3. Si dice que SÍ, pasa a la ronda 1
confirmarBtn.addEventListener('click', () => {
    window.location.href = "../html/ronda1.html";
});




const slides = document.querySelectorAll('.gif-slide');
let currentSlide = 0;
let gifInterval; // Variable para guardar el temporizador

function nextGif() {
    // Quitamos 'active' al actual
    slides[currentSlide].classList.remove('active');
    
    // Pasamos al siguiente (y volvemos al 0 si llegamos al final)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Ponemos 'active' al nuevo
    slides[currentSlide].classList.add('active');
}

// Modificamos el evento de abrir el modal
mainBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    
    // Inicia el cambio de GIFs cada 2 segundos (2000ms)
    gifInterval = setInterval(nextGif, 2000);
});

// Modificamos el evento de cerrar/confirmar para detener el intervalo
function cerrarModal() {
    modal.style.display = 'none';
    clearInterval(gifInterval); // Detenemos el temporizador para ahorrar memoria
}

cancelarBtn.addEventListener('click', cerrarModal);
confirmarBtn.addEventListener('click', cerrarModal);