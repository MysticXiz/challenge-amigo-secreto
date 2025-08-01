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
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio.');
        return;
    }
    const amigoSorteado = sortear(amigos);
    console.log(amigoSorteado);
    const mensagem = `O amigo sorteado é: ${amigoSorteado}`;
    document.getElementById('resultado').textContent = mensagem;
}