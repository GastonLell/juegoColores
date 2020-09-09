// crear arr de seis colores
let colors = [];
generateRandomColors(6, colors);

// boton resetear;
let resetear = document.querySelector("#reset");

// seleccion de divs de difernetes colores;
let difDivs = document.querySelectorAll(".square");

// variable body
let cuerpo = document.body;
let colorBody = cuerpo.style.backgroundColor;

// titulo 
let titulo = document.querySelector("#titulo");

// mensajes
let mensajes = document.querySelector("#message");

//asignarle un color del arreglo a cada div; EVENTO

for(let i = 0; i < difDivs.length; i++){
    difDivs[i].style.backgroundColor = colors[i];
    difDivs[i].addEventListener("click", function(){
        clickedColor = difDivs[i].style.backgroundColor;
        if(clickedColor !== pickedColor){
            this.style.backgroundColor = "#232323";
            mensajes.textContent = "Try Again";
        } else {
            mensajes.textContent = "Correct!";
            resetear.setAttribute("value", "Play Again?");
            titulo.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        }
    })
}

function pickColor(colors){
    let numeroRandom = Math.floor(Math.random() * 5 + 0)
    return colors[numeroRandom];
}

// color del span del titulo;
let pickedColor = pickColor(colors);

document.querySelector("#colorDisplay").textContent = pickedColor;

//variable para guardar el color clickeado;
let clickedColor;

// funcion cambio color
function changeColors(color){
    for(let i = 0; i < difDivs.length; i++){
        difDivs[i].style.backgroundColor = color;
    }
}

// funcion para generar color random
function randomColor(){
    let colorUno = Math.floor(Math.random() * 225 + 0);
    let colorDos = Math.floor(Math.random() * 225 + 0);
    let colorTres = Math.floor(Math.random() * 225 + 0);
    return "rgb(" + colorUno + ", " + colorDos + ", " + colorTres + ")";
}

// funcion para crear arreglo de colores
function generateRandomColors(number, arr){
    for(let i = 0; i < number; i++){
        arr.push(randomColor())
    }
}