/*
Arrays em JavaScript

Variável armazena apenas um valor 
enquanto o array armazena vários
ex01:

console.log(frutas)

let frutas = ["maçã", "banana", "uva"]

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i] + "\n")
}


// metodos dos arrays

push() - adiciona
pop() - remove o item final
shift() - remove o início
unshift() - adiciona ao início
length - conta o tamanho do array

ex2:
*/

let frutas = ["maçã", "banana", "uva"]

frutas.push("morango")
frutas.unshift("goiaba")
frutas.pop()


for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i] + "\n")
}