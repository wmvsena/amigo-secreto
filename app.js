//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomesSecretos = [];

function adicionarNome() {
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (nome =="") {
        alert("Por Favor insira um nome de um amigo secreto")
        return
    }
    
    listaDeNomesSecretos.push(nome);
    console.log(listaDeNomesSecretos);
    nomeDoAmigo.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
        const lista = document.querySelector("#listaAmigos");
        lista.innerHTML = "";
        console.log("Lista limpa")

        for (let i = 0; i < listaDeNomesSecretos.length; i++){
            const li = document.createElement("li")
            li.textContent = listaDeNomesSecretos[i]
            lista.appendChild(li);
        }

}

function sortearAmigo() {
    if (listaDeNomesSecretos.length < 2 || listaDeNomesSecretos.length === 0) { 
        alert("Não há amigos para sortear. Adicione alguns nomes.");
        return;
    } 
 
    const indiceAleatorio = Math.floor(Math.random() * listaDeNomesSecretos.length);
    const amigoSorteado = listaDeNomesSecretos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

}