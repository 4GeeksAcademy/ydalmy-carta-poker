import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let caracteres = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let pintas = ["♦","♥", "♠", "♣"];
let clases =["pinta-roja", "pinta-negra"];

// Generando un número aleatorio entre 0 y el tamaño del arreglo caracteres
let indiceCaracter = Math.floor(Math.random() * caracteres.length);

// Buscando el indice anterior en el arreglo caracteres
let caracter = caracteres[indiceCaracter];

// Obteniendo del HTML el DIV que tenga el ID caracter
let caracterHTMLObj = document.getElementById("caracter");

// Asignado el caracter elegido al DIV anterior
caracterHTMLObj.innerHTML = caracter;

// Asignando la clase
let indiceClase = Math.floor(Math.random() * clases.length);

// Buscando el indice anterior en el arreglo clases
let clase = clases[indiceClase];

// Obteniendo del HTML el DIV que tenga el ID card
let headerHTMLObj = document.getElementById("header");
let footerHTMLObj = document.getElementById("footer");



// Asignando la pinta
let indicePinta = Math.floor(Math.random() * pintas.length);

// Buscando el indice anterior en el arreglo pintas
let pinta = pintas[indicePinta];

// Asignando la clase elegida al DIV anterior
footerHTMLObj.innerHTML = pinta;
headerHTMLObj.innerHTML = pinta;

// Asignando la clase elegida al DIV anterior
if(pinta == "♦" || pinta == "♥"){
    headerHTMLObj.classList.add("pinta-roja");
    footerHTMLObj.classList.add("pinta-roja");
}
else{
    headerHTMLObj.classList.add("pinta-negra");
    footerHTMLObj.classList.add("pinta-negra");
}

};
