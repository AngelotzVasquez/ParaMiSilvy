const text = document.getElementById("text");
const character = document.getElementById("character");
const nextBtn = document.getElementById("nextBtn");
const choicesDiv = document.getElementById("choices");

let index = 0;

// Historia
const story = [

    {
        text: "Oli hermosha,  Esto no es un super DLC xd, tampoco tiene finales malos. Solo esta hecho con cariño para ti 💗",
        img: "../bg/sayori1.png"
    },

    {
        text: "Es egoista decirle a una chica que es fuerte y que puede seguir sonriendo... incluso cuando está cansada del mundo.",
        img: "../bg/sayori.png"
    },

    {
        text: "Decír 'estoy bien' o no decir nada, pero estar para mi haciendo que todo pareciera más liviano y mas fácil de llevar",
        img: "../bg/sayori.png"
    },

    {
        text: "Escondiendo grandes tormentas detrás de un sol tan brillante",
        img: "../bg/sayori1.png"
    },

    {
        text: "Ojalá pudiera proteger cada pedacito de su corazón, amarla y preocuparme por ella más que nadie en el mundo, es lo que suelo pensar",
        img: "../bg/sayomeme.png"
    },

    {
        text: "¿Qué te gustaria hacer?",
        img: "../bg/sayomeme.png",
        choices: [
            {
                text: "Le pregunto si está bien",
                next: 6
            },
            {
                text: "La abrazo sin decir nada",
                next: 7
            }
        ]
    },

    {
        text: "Siempre me decia que lo estaba, pero yo sé que no siempre era verdad, tan sensible, tan intensa, tan increible, tan hermosa y simplemente tan... tan ella misma que pensé: deseo quedarme a su lado",
        img: "../bg/sayomeme.png"
    },

    {
        text: "No dije mucho, solo la admiraba, la abrazaba sin juzgarla por que a veces... el amor no necesita palabras",
        img: "../bg/sayomeme.png"
    },

    // 🔥 NATSUKI MODE ACTIVADO
    {
        text: "ME HAN DICHO KE TENGO LA VOZ DE BAKUGO, B-BAAAAAAAAKA, Oye... no creas que hice todo esto solo porque sí...",
        img: "../bg/natsuki.png"
    },

    {
        text: "Natsuki nunca dice todo directo... pero cuando ama, lo hace de verdad y al igual que yo, lo puede entregar todo por amor",
        img: "../bg/natsu.png"
    },

    {
        text: "Tal vez no puedo estar contigo hoy mi niña, tal vez no pueda abrazarte y tomar tu mano en este momento, pero estoy aquí eligiéndote siempre y pensando en ti por que eres la única chica que deseo en mi vida Silvy",
        img: "../bg/sayomeme.png"
    },

    {
        text: "Si esta vida fuera un juego... mi final favorito sería contigo. Te amo demasiado mi niña💖",
        img: "../bg/sayori1.png"
    }

];

function showStory() {

    const current = story[index];

    // Fade out
    text.style.opacity = 0;
    character.classList.add("hidden");

    setTimeout(() => {

        // Limpiamos texto
        text.innerText = "";

        character.src = current.img;
        choicesDiv.innerHTML = "";

        // Quitamos glitch siempre
        character.classList.remove("glitch");

        // Glitch Natsuki
        if (
            current.img.includes("natsuki") ||
            current.img.includes("natsu")
        ) {
            character.classList.add("glitch");

            setTimeout(() => {
                character.classList.remove("glitch");
            }, 1500);
        }

        // Mostramos personaje
        character.classList.remove("hidden");

        // Fade in
        text.style.opacity = 1;

        // 👉 EFECTO MAQUINA DE ESCRIBIR
        let i = 0;
        const speed = 30; // menor = más rápido

        function typeWriter() {

            if (i < current.text.length) {

                text.innerHTML += current.text.charAt(i);
                i++;

                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

        // Opciones
        if (current.choices) {

            nextBtn.style.display = "none";

            current.choices.forEach(choice => {

                const btn = document.createElement("button");
                btn.innerText = choice.text;
                btn.classList.add("choice-btn");

                btn.onclick = () => {
                    index = choice.next;
                    showStory();
                };

                choicesDiv.appendChild(btn);
            });

        } else {

            nextBtn.style.display = "block";
        }

    }, 400);
}



nextBtn.addEventListener("click", () => {

    // 👉 Si estamos en el último diálogo
    if (index === story.length - 1) {

        // Transición bonita (opcional)
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "../html/alien.html";
        }, 800);

        return;
    }

    // Normal
    if (index < story.length - 1) {
        index++;
        showStory();
    }
});



// Pantalla bienvenida

const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");
const game = document.querySelector(".game");
const bgm = document.getElementById("bgm");


// Ocultamos juego al inicio
game.style.display = "none";

startBtn.addEventListener("click", () => {

    // 🎵 Iniciar música
    const bgm = document.getElementById("bgm");

    if (bgm) {
        bgm.volume = 0.3;
        bgm.play().catch(err => {
            console.log("Autoplay bloqueado:", err);
        });
    }

    // 🫧 Detener monitos
    if (typeof floatingInterval !== "undefined") {
        clearInterval(floatingInterval);
    }

    const container = document.getElementById("floating-container");
    if (container) {
        container.innerHTML = "";
        container.style.display = "none";
    }

    // 💗 Ocultar bienvenida
    welcome.classList.add("hidden-welcome");

    setTimeout(() => {

        welcome.style.display = "none";
        game.style.display = "block";

        showStory();

    }, 800);

});



