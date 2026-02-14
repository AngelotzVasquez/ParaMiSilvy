const lanes = document.querySelectorAll(".lane");
const song = document.getElementById("song");

const scoreEl = document.getElementById("score");
const comboEl = document.getElementById("combo");

let score = 0;
const goal = 89; // Meta real
let combo = 0;
let playing = false;
let musicStarted = false;


// MAPEO TECLAS

const keys = {
    a: 0, // Left
    s: 1, // Down
    w: 2, // Up
    d: 3  // Right
};



// CREAR NOTAS (IMAGEN TILL)

function createNote(laneIndex) {

    const lane = lanes[laneIndex];

    const note = document.createElement("div");
    note.classList.add("note");

    // Imagen Till
    const img = document.createElement("img");
    img.src = "../bg/monitos/till3.png";
    img.classList.add("note-img");

    note.appendChild(img);
    lane.appendChild(note);

    let pos = -60;

    const fall = setInterval(() => {

        pos += 8; // velocidad
        note.style.top = pos + "px";

        // Falló
        if (pos > 360) {

            clearInterval(fall);
            note.remove();

            combo = 0;
            score -= 3;

            checkGameState();
            updateHUD();
        }

    }, 20);

    note.dataset.fall = fall;
}


// GENERADOR DE NOTAS

function startNotes() {

    setInterval(() => {

        if (!playing) return;

        const rand = Math.floor(Math.random() * 4);

        createNote(rand);

    }, 500); // spawn
}


// INPUT + INICIO MÚSICA

document.addEventListener("keydown", e => {

    const key = e.key.toLowerCase(); // 👈 importante para WASD

    // Iniciar música con primera tecla
    if (!musicStarted) {

        song.volume = 0.7;
        song.play().catch(() => {}); // evita errores del navegador

        playing = true;
        musicStarted = true;

        startNotes();
        updateHUD();
    }

    if (!playing) return;

    if (!(key in keys)) return;

    const laneIndex = keys[key];

    hit(laneIndex);

});



// HIT DETECTION

function hit(laneIndex) {

    const lane = lanes[laneIndex];

    const note = lane.querySelector(".note");

    if (!note) return;

    const top = parseInt(note.style.top);

    // Zona perfecta
    if (top > 300 && top < 360) {

        clearInterval(note.dataset.fall);

        note.remove();

        score += 1;
        combo++;

        checkGameState();
        updateHUD();
    }

}


// HUD

function updateHUD() {

    scoreEl.innerText = `${score} / 70`; // fake 😏
    comboEl.innerText = "Combo: " + combo;
}


// GANAR / PERDER

function checkGameState() {

    // Pierde
    if (score < 0) {

        playing = false;
        song.pause();

        setTimeout(() => {

            alert("💔 NOOO Intenta otra vez peshosha 💗");

            location.reload();

        }, 300);

    }

    // Gana
    if (score >= goal) {

        playing = false;
        song.pause();

        setTimeout(() => {

            alert("💖 89/70… LO LOGRASTEEEE😭💖");

            window.location.href = "../html/ronda6.html";

        }, 500);

    }
}
