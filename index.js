const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

function mostrarResposta(pergunta) {
    let respostaSelecionada = respostas[Math.floor(Math.random() * respostas.length)];
    elementoResposta.innerHTML = pergunta + respostaSelecionada;

    elementoResposta.style.opacity = 1;

    setTimeout(function () {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}

function fazerPergunta() {
    if (inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    mostrarResposta(pergunta)
}