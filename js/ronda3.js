const game = document.getElementById("memoryGame");

const pairs = 10;
let cards = [];
let first = null;
let second = null;
let lock = false;
let matched = 0;

// Crear pares
for (let i = 1; i <= pairs; i++) {

    cards.push(`../bg/memory/par${i}.jpg`);
    cards.push(`../bg/memory/par${i}.jpg`);

}

// Mezclar cartas
cards.sort(() => Math.random() - 0.5);


// Crear tablero
cards.forEach(src => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
                <img src="${src}">
            </div>
        </div>
    `;

    card.addEventListener("click", () => flip(card));

    game.appendChild(card);

});


// Girar carta
function flip(card) {

    if (lock) return;
    if (card === first) return;

    card.classList.add("flipped");

    if (!first) {
        first = card;
        return;
    }

    second = card;
    lock = true;

    check();
}


// Verificar
function check() {

    const img1 = first.querySelector("img").src;
    const img2 = second.querySelector("img").src;

    if (img1 === img2) {

        matched += 2;

        first.classList.add("matched");
        second.classList.add("matched");

        reset();

        if (matched === cards.length) {
            win();
        }

    } else {

        setTimeout(() => {

            first.classList.remove("flipped");
            second.classList.remove("flipped");

            reset();

        }, 900);
    }
}


// Reset turno
function reset() {
    first = null;
    second = null;
    lock = false;
}


// Ganaste
function win() {

    setTimeout(() => {

        alert("💖 GANASTEEE TE AMOOOO 💖");

        window.location.href = "../html/ronda4.html";

    }, 800);

}
