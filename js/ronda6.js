const container = document.querySelector(".game-container");
const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const song = document.getElementById("song");

let musicStarted = false;


let score = 0;
const goal = 89;
let playing = true;


// MOVER CON A / D

let playerX = 50;

document.addEventListener("keydown", e => {

    // ▶️ INICIAR MÚSICA (solo 1 vez)
    if (!musicStarted) {

        song.load();               // 🔄 Fuerza carga
        song.currentTime = 0;      // ⏮️ Reinicia
        song.volume = 0.7;

        song.play()
        .then(() => {
            console.log("🎵 Ozuna ON");
        })
        .catch(err => {
            console.log("❌ Audio bloqueado:", err);
        });

        playing = true;
        musicStarted = true;
    }


    if (!playing) return;


    // 🕹️ MOVIMIENTO (A / D)

    if (e.key === "a") {
        playerX -= 5;
    }

    if (e.key === "d") {
        playerX += 5;
    }


    // LÍMITES

    playerX = Math.max(5, Math.min(95, playerX));

    player.style.left = playerX + "%";


    // 💥 HIT / ACCIÓN (si usas teclas de juego)

    if (e.key in keys) {

        const laneIndex = keys[e.key];

        hit(laneIndex);
    }

});

// CREAR ITEMS

function createItem(type) {

    const item = document.createElement("div");

    item.classList.add("item", type);

    item.style.left = Math.random() * 90 + "%";
    item.style.top = "-40px";

    container.appendChild(item);

    let y = -40;

    const fall = setInterval(() => {

        y += 5;
        item.style.top = y + "px";

        // Colisión
        if (checkCollision(item, player)) {

            clearInterval(fall);
            item.remove();

            if (type === "heart") {
                score += 1;
            } else {
                score -= 2;
            }

            updateScore();
            checkGame();
        }

        // Se pierde
        if (y > 500) {
            clearInterval(fall);
            item.remove();
        }

    }, 20);
}


// COLISIONES

function checkCollision(a, b) {

    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.bottom < r2.top ||
        r1.left > r2.right ||
        r1.right < r2.left
    );
}


// GENERADOR

setInterval(() => {

    if (!playing) return;

    const rand = Math.random();

    if (rand < 0.7) {
        createItem("heart");
    } else {
        createItem("bad");
    }

}, 800);


// HUD

function updateScore() {

    scoreEl.innerText = `${score} / 70`;
}


// GANAR / PERDER

function checkGame() {

    // Perder
    if (score < 0) {

        playing = false;

        setTimeout(() => {

            alert("NOOO PERO SILVY ME MORI JDASJD");

            location.reload();

        }, 300);
    }

    // Ganar
    if (score >= goal) {

        playing = false;

        setTimeout(() => {

            alert("💖 GRACIAS AMOR CASI ME COJE OZUNA💖");

            window.location.href = "../html/rondafinal.html";

        }, 500);
    }
}


updateScore();
 