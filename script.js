"use strict";

// Mensaje de bienvenida
alert("Bienvenid@");

// Inicialización del contador
let contador = 0;

// Obtener referencia a los botones
let botonContar = document.getElementById("sumarClicks");
botonContar.addEventListener("click", contarClick);

let botonRestar = document.getElementById("restarClicks");
botonRestar.addEventListener("click", restarClick);

let botonMostrar = document.getElementById("mostrarCantidadDeClicks");
botonMostrar.addEventListener("click", mostrarClick);

// Función para incrementar el contador
function contarClick() {
    contador++;
    document.querySelector("h1").innerHTML = contador;
}

// Función para decrementar el contador
function restarClick() {
    contador--;
    document.querySelector("h1").innerHTML = contador;
}

// Función para mostrar la cantidad de clicks en un alert
function mostrarClick() {
    document.querySelector("h1").innerHTML = contador;
    alert(contador);
}
