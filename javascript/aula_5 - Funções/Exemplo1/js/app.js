/*
// Funções em JS
// Funções são blocos de código reutilizáveis

console.log("Função simples!")
function saudacao() {
    console.log("Seja bem vindo!")
}

saudacao()


// função com parâmetro

let nomeUser = prompt("Digite seu nome:")
function saudacao2(nome) {
    console.log(`Seja bem vindo, ${nome}!`)
}

saudacao2(nomeUser)

// Exemplo função com parâmetro e retorno
function soma(a, b) {
    return a + b
}

console.log(soma(1, 4))
console.log("A soma dos números é: " + soma(7, 4))
console.log(`A soma dos números é: ${soma(5, 9)}`)
*/

// Exemplo 3 - arrow function

let somar = (a, b) => {return a + b}

console.log(`A soma com Arrow Function é: ${soma(10, 10)}`)