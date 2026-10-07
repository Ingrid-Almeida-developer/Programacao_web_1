let idade = Number(prompt("Digite sua idade:"))

if(idade >= 18) {
    let escolha = Number(prompt("1 - VIP\n2 - PRO\n3 - Básico\n\nEscolha o seu plano:"));

    switch(escolha) {
        case 1:
            alert("Você escolheu o plano VIP!\nVocê terá acesso a aulas exclusivas")
            break
        case 2:
            alert("Você escolheu o plano PRO!\nVocê não verá mais anúncios")
            break
        case 3:
            alert("Você escolheu o plano Básico!\nAparecerá alguns anúncios para você")
            break
        default:
            alert("Digite uma opção válida (1, 2, 3)")
    }
} else {
    alert("Você é menor de idade, não pode acessar a plataforma")
}