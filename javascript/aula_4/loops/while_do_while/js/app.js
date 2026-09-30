/*
A diferença do While e do Do While
1 - While verifica antes e depois executa, tem um contador
2 - Do while antes executa e verifica depois, não tem contador e executa o loop pelo menos uma vez
*/
 
/* while
let num1 = 0
while(num1 <= 5) {
    console.log(`${num1 + 1} rodada`)
    num1++
}
*/

// exemplo 2
let num1 = 0
let num2 = prompt("Digite um número:")
console.log("TABUADA")
while(num1 <= 10) {
    console.log(`${num2} x ${num1} = ${(num2 * num1)}`)
    num1++
}