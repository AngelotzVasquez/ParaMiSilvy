const container = document.getElementById("floating-container");

// Sonido POP
const popSound = new Audio("../sonido/Pop.mp3");
popSound.volume = 0.5;

// Imágenes / GIF
const images = [
    "../bg/monitos/ivan1.png",
    "../bg/monitos/ivan2.gif",
    "../bg/monitos/mizi1.png",
    "../bg/monitos/mizi2.gif",
    "../bg/monitos/mizi3.gif",
    "../bg/monitos/sua1.gif",
    "../bg/monitos/sua2.gif",
    "../bg/monitos/sua3.gif",
    "../bg/monitos/till1.png",
    "../bg/monitos/till2.gif",
    "../bg/monitos/till3.png"
];

function createFloating() {

    const img = document.createElement("img");

    // Imagen random
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("floating-img");

    // Posición inicial random
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";

    // Tamaño random
    const size = 40 + Math.random() * 40;
    img.style.width = size + "px";

    // Movimiento random
    img.style.setProperty("--move-x", (Math.random() * 400 - 200) + "px");
    img.style.setProperty("--move-y", (Math.random() * 400 - 200) + "px");

    // Duración animación
    const duration = 10 + Math.random() * 12;
    img.style.animationDuration = duration + "s";

    // CLICK = POP 💥
    img.addEventListener("click", () => {

        if (img.classList.contains("pop")) return;

        img.classList.add("pop");

        // Sonido
        popSound.currentTime = 0;
        popSound.play();

        setTimeout(() => {
            img.remove();
        }, 300);

    });

    container.appendChild(img);

    // Solo borrar cuando termine la animación (sin pop)
    setTimeout(() => {
        img.remove();
    }, duration * 800);
}

// Crear constantemente
const floatingInterval = setInterval(createFloating, 500);




