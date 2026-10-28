let valor = document.getElementById("valor")
let btnMenos = document.getElementById("menos")
let btnMais = document.getElementById("mais")

let contador = 0

btnMais.addEventListener('click', () => {
    contador++
    valor.textContent = contador
    if(contador < 0) {
    valor.style.color = "red"
    } else {
    valor.style.color = "black"
    }
})

btnMenos.addEventListener('click', () => {
    contador--
    valor.textContent = contador
    if(contador < 0) {
    valor.style.color = "red"
    } else {
    valor.style.color = "black"
    }
})