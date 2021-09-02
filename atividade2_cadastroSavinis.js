//Lista de eventos cadastrados
let eventos = [
    {
        Evento: "Lógica de Programação",
        Data: "03/09/2021",
        Palestrantes: "Fulano da Silva e Beltrano Ferreira",
        Participantes: "87"
    },
    {
        Evento: "Git e Github",
        Data: "04/09/2021",
        Palestrantes: "Chitãozinho e Xororó",
        Participantes: "95"
    },
    {
        Evento: "Front End",
        Data: "05/09/2021",
        Palestrantes: "João Bosco e Aldir Blanc",
        Participantes: "100"
    }]

// Exibe eventos, palestrante e número de participantes
console.log("Lista de eventos:")
console.log(eventos);


// Teste data do evento posterior à data atual e inclusão de evento na lista em caso positivo
let dataAtual = new Date ()
let dataEvento = new Date ("2021-09-10")

console.log("\nCadastro de evento! Data atual: " + dataAtual)

if (dataEvento > dataAtual) {
    let novoEvento = {
        Evento: "Back End in Bahia",
        Data: "Data: "+ dataEvento,
        Palestrantes: "Gil e Caetano",
        Participantes: "0"
    }
    eventos.push(novoEvento)
    console.log ("Evento cadastrado! Data do evento: " + dataEvento + "\n")
    console.log("Lista de eventos:")
    console.log(eventos);
} else {
    console.log("Data do evento inválida! (Formato: AAAA-MM-DD)\n")
}

//Lista de participantes do evento
let participantes = ["João A.B.", "Maria B.C.", "José C.D.", "Pedro D.E.", "Joana E.F.", "Juliana F.G.", "André G.H."]

//Verificação da maioridade do participante e do número de vagas, caso o participante seja maior de idade
let dataNasc = new Date ("2000-09-23")
let nParticip = participantes.length
const maxVagas = 100
let restVagas = maxVagas - nParticip
console.log("\nData de Nascimento: " + dataNasc)

//Cálculo da idade
var idade = (dataAtual.getTime() - dataNasc.getTime()) / (1000*60*60*24*365.25) // .getTime em ms
console.log(idade + " anos\n")

if (idade >= 18) {
    // Verificação do número de vagas
    if (nParticip < maxVagas) {
        //Inclusão do novo participante na lista de participantes
        let novoparticipante = "Leonardo H.I."
        participantes.push(novoparticipante)
        nParticip = participantes.length
        restVagas = maxVagas - nParticip
        console.log("Há vagas! Cadastro do participante realizado com sucesso!\nPaticipantes: " + nParticip + "\nVagas restantes: " + restVagas + "\n")
        console.log("Participantes: ")
        participantes.forEach(element => {
            console.log(element)
        })
    } else {
        console.log("Limite de 100 participantes atingido! Por favor escolha outro evento!\n")
    }
} else {
    console.log("O participante deve ter mais de 18 anos! (Formato data: AAAA-MM-DD)\n")
}

// EP desenvolvido sem inputs do usuário, retorno ao menu incial e outros elementos inicialmente previstos no fluxograma
// pequeno erro na leitura de datas devido a problema com fuso de Brasílio (-3h); ex: 23/09 0:00 = 22/09 21:00