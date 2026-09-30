/*
Operadores Lógicos

&& - And logico
|| - Or logico
! - Not logico
*/

// Exemplos 

let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condições simples")
if(num1 >= num2) {
    console.log("Entrou no IF")
} else {
    console.log("FALSIANE!)Não entrou no IF")
}

// Exemplo composto

console.log("Condições compostas")
if((num1 >= num2) && (num1 != num3)) {
    console.log("Entrou no IF")
} else {
    console.log("FALSIANE!)Não entrou no IF")
}

console.log("Condições compostas com 3 condições")
if(((num1 >= num2) && (num1 != num3)) || (num1 != num3)) {
    console.log("Entrou no IF")
} else {
    console.log("FALSIANE!)Não entrou no IF")
}

// Condiçaõ simples negada

console.log("Condições simples negada")
if(!(num1 >= num2)) {
    console.log("Entrou no IF")
} else {
    console.log("FALSIANE!)Não entrou no IF")
}

