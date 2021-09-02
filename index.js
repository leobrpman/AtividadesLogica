//Com for
let listadeEstudantes = ["Helena","Chico","Mário","André","Pedro"]
///imprimindo a lista inicial
console.log("lista inicial:", listadeEstudantes)
//incluindo o José
listadeEstudantes.push("José")
//contando tamanho da lista
let numerodeEstudantes = listadeEstudantes.length
//imprimindo a lista com as posições
console.log("José incluído; a nova lista possui", numerodeEstudantes, "estudantes!")
for (indice = 0; indice < numerodeEstudantes; indice++) {
    let alunoCorrente = listadeEstudantes[indice]
    console.log(indice+1, alunoCorrente)
}

//Com do-while
let listadeEstudantes2 = ["Helena","Chico","Mário"]
let numerodeEstudantes2 = listadeEstudantes2.length
do{
    listadeEstudantes2.push("José")
    numerodeEstudantes2++
} while(numerodeEstudantes2 < 5)
console.log("A lista possui", numerodeEstudantes2, "estudantes!")
let item = 0
do {
    console.log(item+1, listadeEstudantes2[item])
    item++
} while (item < numerodeEstudantes2)

//Com while
let listadeEstudantes3 = ["Helena","Chico","Mário","André"]
let numerodeEstudantes3 = listadeEstudantes3.length
if(numerodeEstudantes3 < 5){
    listadeEstudantes3.push("José")
    numerodeEstudantes3++
} else {
    console.log("Turma lotada com", numerodeEstudantes3, "estudantes!")
}
if(numerodeEstudantes3 < 5){
    listadeEstudantes3.push("João")
    numerodeEstudantes3++
} else {
    console.log("Turma lotada com", numerodeEstudantes3, "estudantes!")
}
console.log("A lista possui", numerodeEstudantes3, "estudantes!")
let posicao = 0
while(posicao < numerodeEstudantes3) {
    console.log(posicao+1, listadeEstudantes3[posicao])
    posicao++
}

for(numero = 1; numero <=10; numero++){
    console.log(numero)
}