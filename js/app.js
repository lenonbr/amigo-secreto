adicionar();
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    }
    else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    
}

function reiniciar() {

}