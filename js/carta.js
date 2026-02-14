const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letter-text");
const music = document.getElementById("music");

let musicStarted = false;

let clicks = 0;
const clicksNeeded = 14; // Número de clicks para abrir

const message = `
💌 Holi mi niña, este es un pequeño (xd) mensaje que me gustaría entregarte. Primero que nada, agradecerte nuevamente por todo lo que me das, por todo lo que haces por mí, por ser tú misma, que es lo que tanto me encanta al fin y al cabo. Quizás somos muy jóvenes, nos falta demasiado por vivir, pero quiero decirte y recordarte que quiero quedarme contigo, que no quiero ver otra sonrisa que no sea la tuya, no quiero otros abrazos que no sean los tuyos. Quiero quedarme contigo, a tu lado, porque es agradable, porque me hace feliz.

Muchas veces te veo sin que te des cuenta y pienso en lo afortunado que soy de poder tenerte. Me encanta que seas cariñosa conmigo, me gusta el mimo que me das jdasdjda. Estoy muy, pero muy orgulloso de ti, de lo grandiosa que eres. Amo que me cuentes las cosas con emoción, porque se forma en tu rostro una sonrisa tan hermosa que me enamora cada vez que la veo.

Y para mí, que te he visto en tus “modos”: desarreglada, despeinada, que tal vez no te guste cómo te ves tú, quiero que sepas que conmigo no tendrás miedo de sentirte juzgada, que amo cada parte de ti, que eres la niña más hermosa que hay. Te adoro por cómo eres. Si pudieras verte a través de mis ojos, verías lo perfecta que estás, tan preciosa y única.

No eres una mala novia, no eres una mala amiga, no eres una mala hija como te lo hacen creer. No eres nada difícil de amar, no eres para nada insoportable. Seguiré repitiendo que eres una chica súper fuerte y que admiro cada pedacito de ti, que daría cada parte de mí para sanar hasta el más mínimo dolor de tu corazoncito.

Sé que no será nada fácil, pero quiero que sigamos siendo tú y yo por mucho tiempo más. Sé que podemos y sé que puedes, aunque esa cabecita diga que no. No dudes de lo maravillosa que eres. Si las cosas te salen bien, quiero que te gires porque ahí estaré yo, totalmente feliz y orgulloso de tus logros. Pero si la vida es un poco injusta y sale mal, quiero que te gires también porque ahí seguiré yo para sostenerte, recordarte lo mucho que vales y demostrarte que, a pesar de todo, siempre estaré más orgulloso de ti que nunca.

Quiero que sigamos juntos porque yo sí soportaré tus cambios de humor, tus malos ratos, tu estrés, tu llanto. Te haré sentir segura, siempre intentaré buscar una solución a tus problemas. Jamás te haré sentir insegura de tu cuerpo tan hermoso. No sabes lo mucho que disfruto reír contigo, ese sentimiento de paz, sentirse tranquilo disfrutando de tu compañía. Realmente me sorprende cómo se dio todo entre nosotros para llegar a ser lo que somos ahora.

Sé que no tienes ni idea todas las veces que me has salvado sin darte cuenta: por quedarte cuando no era fácil, abrazarme cuando no sabía qué hacer, por creer en mí. Contigo también voy aprendiendo a amar cada vez más, un amor real en donde estemos cómodos, nos cuidemos, nos escuchemos, crezcamos juntos.

Te sigo eligiendo a ti y a nadie más. Quiero seguir respetándote, apoyándote con todo mi ser. 

Y silvy, en fin… Te amo.💖`;

// Máquina de escribir
function typeWriter(text, el, index = 0) {
    if (index < text.length) {
        el.innerHTML += text[index];
        setTimeout(() => typeWriter(text, el, index + 1), 50);
    }
}

// Click en el sobre
envelope.addEventListener("click", () => {

    clicks++;

    // Shake
    envelope.classList.remove("shake");
    void envelope.offsetWidth; // reset animación
    envelope.classList.add("shake");

    // Cuando llega al límite
    if (clicks >= clicksNeeded) {

        // Música (una sola vez + loop)
        if (!musicStarted) {
            music.loop = true;     // 🔁 Repetir siempre
            music.volume = 0.3;    // 🔊 Suavecito romántico
            music.play().catch(() => {});
            musicStarted = true;
        }

        // Desaparecer el sobre suavemente
        envelope.style.transition = "all 0.5s ease";
        envelope.style.opacity = "0";
        envelope.style.transform = "scale(0.8)";

        // Quitar del DOM después
        setTimeout(() => {
            envelope.style.display = "none";

            // Mostrar carta
            letter.classList.remove("hidden");
            typeWriter(message, letterText);

        }, 500);
    }

});

