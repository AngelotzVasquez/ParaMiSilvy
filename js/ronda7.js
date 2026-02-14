const yes = document.getElementById("yes");
const no = document.getElementById("no");
const finalCard = document.getElementById("finalCard");

const container = document.querySelector(".buttons");

// NO se mueve 😈
// NO se mueve por toda la pantalla
no.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - no.clientWidth;
    const maxY = window.innerHeight - no.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    no.style.position = "fixed"; // para que se mueva respecto a la ventana
    no.style.left = x + "px";
    no.style.top = y + "px";
});



yes.addEventListener("click", () => {
    // Mostrar la carta final
    finalCard.classList.add("show");

    // Redirigir a la última parte después de 5s
    setTimeout(() => {
        window.location.href = "../html/carta.html";
    }, 10000);
});
