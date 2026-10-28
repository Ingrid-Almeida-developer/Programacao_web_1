let paragrafo = document.getElementById("primParag")

function mudarParag() {
    paragrafo.textContent="Parágrafo atualizado!"
}

function mudarCor() {
    paragrafo.style.color="Red"
    paragrafo.textContent="Cursor entrou no botão!"
}

function voltarCor() {
    paragrafo.style.color="Black"
    paragrafo.textContent="Cursor saiu do botão!"
}

let div = document.getElementById("div1")
let parag2 = document.getElementById("paragDiv")

function mudarCorDiv() {
    div.style.backgroundColor = "pink"
    div.style.color = "black"
    parag2.textContent = "Estou rosa agora!"
}

function voltarCorDiv() {
    div.style.backgroundColor = "black"
    div.style.color = "white"
    parag2.textContent = "Estou preta novamente agora!"
}