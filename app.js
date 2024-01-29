
let intentos = 1;
let numeroSecreto = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

console.log(numeroSecreto);


//Selector JavaScript
function asignarTextoElemento(elemento , texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

condicionesIniciales();

//Esta función genera un numero pseudoaleatorio
function numeroAleatorio () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros dispobiles');
    }else{
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return numeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }              
}

let acomulado = listaNumerosSorteados.length;
console.log(`acomulado ${acomulado}`);
if(acomulado == 5){
    listaNumerosSorteados.shift();
}

//Esta función recibe el input del numero del usuario y hace la comparación del valor del usuario con el del numero secreto.
function verficarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p' , `Muy bien, acertaste luego de ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p' , 'El numero es MENOR');
    }else{
        asignarTextoElemento('p' , 'El numero es MAYOR');

    }
    limpiarCaja();
    intentos++;
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

//Brinda los mensajes iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1' , 'Bienvenidos al juego del numero secreto');
    asignarTextoElemento('p' , `Elige un numero del 1 al ${numeroMaximo}`);
     //Generar un nuevo numero pseudoaleatorio
    numeroSecreto = numeroAleatorio();
    //Reiniciar el conteo de intentos
    intentos = 1;
    //Reiniciar el almacenamiento de numeros sorteados
}

function reiniciarJuego() {
    //Se limpia la caja del input
    limpiarCaja();
    //Se le asigna el texto inicial
    condicionesIniciales(); 
    //Deshabilitar el botón "Nuevo juego"
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}



