let amigos = [];

function adicionarAmigo(){
    const amigo = document.getElementById('amigo').value;
    if (amigo) {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        atualizarLista();
    }else{
        alert('Por favor, insira um nome.')
        console.log(amigos);
        return;
    }
}
function atualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
