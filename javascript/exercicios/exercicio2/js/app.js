let escolha = Number(prompt("1 - Combo Bug (Hambúrguer + Refri)\n2 - Combo Deploy (Pizza + Suco)\n3 - Combo Sênior (Salada + Água)\n\nDigite o combo desejado:"));

switch(escolha) {
    case 1:
        alert("Você pediu um hamburguer e um refri\nTotal: R$30,00")
        break
    case 2:
        alert("Você pediu uma pizza e um suco\nTotal: R$20,00")
        break
    case 3:
        alert("Você pediu uma salada e uma água\nTotal: R$10,00")
        break
    default:
        alert("Digite um número válido (1, 2, 3)")
}