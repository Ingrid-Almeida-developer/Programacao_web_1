/*
Objetos armazenam dados organizados ex: propriedade e valor
ex01:
*/

let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.idade)

for(let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
}