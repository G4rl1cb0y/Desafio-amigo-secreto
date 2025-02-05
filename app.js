// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto = '';

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    } else {
        alert('Por favor, introduce un nombre válido que no esté repetido.');
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        amigoSecreto = amigos[indice];
        document.getElementById('resultado').innerText = `¡Amigo secreto seleccionado: ${amigoSecreto}!`;
    } else {
        document.getElementById('resultado').innerText = 'Añade más amigos antes de seleccionar.';
    }
}