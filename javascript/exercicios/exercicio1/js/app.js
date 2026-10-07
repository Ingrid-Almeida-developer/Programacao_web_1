let nome = prompt("Digite o seu nome:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) / 2;

if(media >= 6) {
    alert(`${nome}, sua média foi ${media}, você foi aprovado(a)!`)
} else {
    alert(`${nome}, sua média foi ${media}, você foi reprovado(a)`)
}