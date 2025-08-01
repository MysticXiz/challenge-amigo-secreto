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
