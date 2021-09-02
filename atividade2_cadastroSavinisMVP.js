// Teste data do evento posterior à data atual
let dataAtual = new Date ()
let dataEvento = new Date ("2021-09-10")

console.log("\nData atual: " + dataAtual)

if (dataEvento > dataAtual) {
    console.log ("Evento cadastrado! Data do evento: " + dataEvento + "\n")
} else {
    console.log("Data do evento inválida! (Formato: AAAA-MM-DD)\n")
}


//Verificação da maioridade do participante e do número de vagas, caso o participante seja maior de idade
let dataNasc = new Date ("2002-09-23")
let nParticip = 87
const maxVagas = 100
var restVagas = maxVagas - nParticip
console.log("\nData de Nascimento: " + dataNasc)

//Cálculo da idade
var idade = (dataAtual.getTime() - dataNasc.getTime()) / (1000*60*60*24*365) // .getTime em ms
console.log(idade + " anos")

if (idade >= 18) {
    // Verificação do número de vagas
    if (nParticip < maxVagas) {
        console.log("Há vagas! Cadastro do participante realizado com sucesso!\nPaticipantes: " + nParticip + "\nVagas restantes: " + restVagas + "\n")
    } else {
        console.log("Limite de 100 participantes atingido! Por favor escolha outro evento!\n")
    }
} else {
    console.log("O participante deve ter mais de 18 anos! (Formato data: AAAA-MM-DD)\n")
}