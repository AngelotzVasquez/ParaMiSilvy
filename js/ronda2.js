const frases = [

    {
        real: "Mi vida entera fue un negro lamento hasta que te vi",
        desorden: ["te","lamento","un","entera","hasta","vida","que","negro","fue","vi","Mi"],
        contexto: "La tragedia de Ivan 💔"
    },

    {
        real: "Sinceramente me encanta todo de ti",
        desorden: ["me","encanta","todo","Sinceramente","ti","de"],
        contexto: "Un mensaje directo a tu corazón ugu❤️"
    },

    {
        real: "Prefiero morir en tus manos que vivir sin tu mirada",
        desorden: ["vivir","tus","mirada","morir","tu","en","Prefiero","sin","que","manos"],
        contexto: "El sacrificioooooo 😢"
    },

    {
        real: "Cantamos para sobrevivir en un escenario que nos quiere muertos",
        desorden: ["muertos","sobrevivir","escenario","un","nos","Cantamos","quiere","en","para","que"],
        contexto: "Uy el concurso 🎤"
    },

    {
        real: "Tu voz es la única melodía que no puedo dejar de seguir",
        desorden: ["melodía","seguir","única","de","Tu","puedo","voz","no","la","es","que","dejar"],
        contexto: "Ke romantikkkk💕"
    },

    {
        real: "Ganaste el round final al adueñarte de mi alma",
        desorden: ["el","mi","final","round","Ganaste","alma","al","adueñarte","de"],
        contexto: "La victoria es tuyaaa 🏆💖"
    }

];

let ronda = 0;

const wordsDiv = document.getElementById("words");
const answerDiv = document.getElementById("answer");
const contextoTxt = document.getElementById("contexto");
const checkBtn = document.getElementById("checkBtn");

function cargarFrase(){

    wordsDiv.innerHTML = "";
    answerDiv.innerHTML = "";

    const frase = frases[ronda];

    contextoTxt.textContent = frase.contexto;

    frase.desorden.forEach(palabra => {

        const span = document.createElement("span");
        span.textContent = palabra;
        span.classList.add("word");

        span.addEventListener("click", () => {
            moverPalabra(span);
        });

        wordsDiv.appendChild(span);
    });
}

function moverPalabra(palabra){

    if(palabra.parentElement === wordsDiv){
        answerDiv.appendChild(palabra);
    }else{
        wordsDiv.appendChild(palabra);
    }
}

checkBtn.addEventListener("click", () => {

    let respuesta = "";

    document.querySelectorAll("#answer .word").forEach(p => {
        respuesta += p.textContent + " ";
    });

    respuesta = respuesta.trim();

    if(respuesta === frases[ronda].real){

        alert("CORRECTOOO, TE GANAS UN BESITO");

        ronda++;

        if(ronda < frases.length){
            cargarFrase();
        }else{
            setTimeout(()=>{
                window.location.href = "../html/ronda3.html";
            },500);
        }

    }else{
        alert("ui se ekivocaba jdaskka ");
    }

});

cargarFrase();
