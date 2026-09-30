alert("Bem vindo a aula de switch case")
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))


let escolha = Number(prompt("Digite 1 para soma e 2 para multiplicação"))

switch(entrada) {
    case 1:
        let soma = num1 + num2
        console.log(`A soma de ${num1} e ${num2} é igual a ${soma}`)
        break
    case 2:
        let multiplicacao = num1 * num2
        console.log(`A multiplicação de ${num1} e ${num2} é igual a ${multiplicacao}`)
        break
    default:
        console.log(`digite 1 OU 2!!!`)
}