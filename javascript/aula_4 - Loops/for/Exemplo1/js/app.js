console.log("Bem vindo a nossa tabuada")

// Estrutura do loop for
/*
Se divide em 3 partes
1 - variável contadora
2 - condição
3 - incremento
*/



/*
for(let i = 1; i <= 5; i++) {
    console.log(`${i} volta do loop for`)
}

console.log(`Calculadora`)

let numero = prompt("Digite um número")

for(let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${i * numero}`)
}


// Controles de loops
// Break para o loop
alert("Bem vindo a nossa tabuada")
let numero = prompt("Digite um número")
for(let i = 0; i <= 10; i++) {
    if(i == 5) {
        break
    }
    console.log(`${numero} x ${i} = ${i * numero}`)
}

*/

// Continue
alert("Bem vindo a nossa tabuada")
let numero = prompt("Digite um número")
for(let i = 0; i <= 10; i++) {
    if(i == 5) {
        continue
    }
    
    console.log(`${numero} x ${i} = ${i * numero}`)
}
