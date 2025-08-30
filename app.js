// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// se crea la lista de amigos
let amigos = [];
let reinicio = false;

// se da la posibilidad de reiniciar el sorteo
function nuevoAmigoSecreto() {
    amigos = [];
    reinicio = true;
}

// se limpia la caja de texto para cada nueva entrada de nombres
function limpiarNombres() {
    document.getElementById('amigo').value = "";
}


//funcion que toma lo que hay en el campo de texto, lo valida y añade a la lista de amigos
function agregarAmigo() {
    // reinicia por si se quiere intentar una nueva lista
    if(reinicio){
        document.getElementById('resultado').innerHTML = "";
        reinicio = false;
    }
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if(nuevoAmigo==""){
        alert("Por favor ingresa un nombre valido");
        limpiarNombres();
    }
    else if(amigos.includes(nuevoAmigo)){
        alert("Hay un nombre similar por favor añade una variacion para diferenciarlos");
        limpiarNombres();
    }
    else{
        amigos.push(nuevoAmigo);
        actualizarLista(nuevoAmigo);
        limpiarNombres();
    }
}

//funcion que sortea el amigo que tocara
function sortearAmigo() {
    let numeroGanador = Math.floor(Math.random()*amigos.length);
    actualizarSorteo(amigos[numeroGanador]);
    nuevoAmigoSecreto();
}

//funcion que actualiza el sorteo, eliminando la lista y mostrando el ganador
function actualizarSorteo(nombreGanador) {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";
    let ganadorHTML = document.getElementById('resultado');
    ganadorHTML.innerHTML = (`El amigo secreto sorteado es: ${nombreGanador}`);
}


//funcion que actualiza los nombres que ingresan a la lista
function actualizarLista(nuevo) {
    let listaHTML = document.getElementById('listaAmigos');
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nuevo;
    listaHTML.appendChild(nuevoAmigo);
}