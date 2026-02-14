const game = document.getElementById("game");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");



// Preguntas
const questions = [

    {
        q: "¿En qué Round ocurre 'Black Sorrow'?",
        answers: [
            { text: "Round 1", correct: false },
            { text: "Round 3", correct: true },
            { text: "Round 2", correct: false }
        ]
    },

    {
        q: "¿Cuál es el lugar donde criaban humanos?",
        answers: [
            { text: "Alien Garden", correct: false },
            { text: "Anakt Garden", correct: true },
            { text: "The Human Box", correct: false }
        ]
    },

    {
        q: "¿Número de participante de Till?",
        answers: [
            { text: "01", correct: false },
            { text: "04", correct: false },
            { text: "05", correct: true }
        ]
    },

    {
        q: "¿Flor que representa la serie?",
        answers: [
            { text: "Rosas negras", correct: false },
            { text: "Clematis", correct: true },
            { text: "Lirios", correct: false }
        ]
    },

    // 💗 FINAL ROMANTICO
    {
        q: "¿Sabes cuánto te amo?",
        answers: [
            { text: "∞", correct: true },
            { text: "∞", correct: true },
            { text: "∞", correct: true }
        ]
    }

];


let index = 0;


// Mostrar pregunta
function showQuestion() {

    const current = questions[index];

    questionEl.innerText = current.q;

    answersEl.innerHTML = "";

    current.answers.forEach(ans => {

        const btn = document.createElement("button");

        btn.innerText = ans.text;

        btn.onclick = () => {

            if (ans.correct) {

                next();

            } else {

                btn.style.background = "#555";
                btn.innerText = "❌ Ñoo, esa nooo";

            }

        };

        answersEl.appendChild(btn);

    });

}


// Siguiente
// Siguiente
function next() {

    index++;

    if (index < questions.length) {

        showQuestion();

    } else {

        // Crear popup final
        const popup = document.createElement("div");
        popup.classList.add("final-popup");

        popup.innerHTML = `
            <div class="popup-box">
                WAAAOS VRUTAL, SI LE SABES WE 💗✨
            </div>
        `;

        document.body.appendChild(popup);

        // Mostrar popup
        setTimeout(() => {
            popup.classList.add("show");
        }, 50);

        // Esperar 2.5s y transicionar
        setTimeout(() => {

            popup.classList.remove("show");

            const fade = document.getElementById("pageFade");
            fade.classList.add("active");

            setTimeout(() => {
                window.location.href = "../html/ronda2.html";
            }, 1200);

        }, 3000);

    }

}




// Esperar anim del titulo
setTimeout(() => {

    game.classList.remove("hidden");
    showQuestion();

}, 4200);
