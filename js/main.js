let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-opcion");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".opciones");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let opciones = ["piedra🪨", "papel📋", "tijera✂️"];
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    let emojiUsuario = e.currentTarget.textContent;

    let emojiPC = opciones[eleccionPC];

    // Lógica para determinar ganador
    if (
        (eleccionUsuario === "piedra🪨" && emojiPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && emojiPC === "papel📋") ||
        (eleccionUsuario === "papel📋" && emojiPC === "piedra🪨")
    ) {
        ganaUsuario();
    } else if (
        (emojiPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (emojiPC === "tijera✂️" && eleccionUsuario === "papel📋") ||
        (emojiPC === "papel📋" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = emojiUsuario;
    contenedorEleccionPC.innerText = emojiPC;

    if (puntosUsuario === 5 || puntosPC === 5) {
        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥 ¡Ganaste el juego! 🔥";
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭";
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭";
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}
