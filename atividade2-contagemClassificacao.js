// EXERCÍCIO USANDO FOR
//
//let numeroDeAlunos = 10
// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     if (contador === 0) {
//         console.log("zero")
//     } else if (contador % 2 == 0) {
//         console.log ("O número", contador, "é par")
//     } else {
//         console.log ("O número " + contador + " é ímpar")
//     }
// }



// let listaDeAlunos = ["João", "José", "Pedro", "Mariana", "Renata"]

// for (const aluno of listaDeAlunos) {
//     console.log(aluno) 
// }

// listaDeAlunos.forEach(element => {
//     console.log(element)
// });


// EXERCÍCIO USANDO WHILE
//
// let numeroDeAlunos = 10
// let contador = 0
// while (contador <= numeroDeAlunos) {
//     if (contador === 0) {
//         console.log("Zero")
//     } else if (contador % 2 == 1) {
//         console.log ("O número", contador, "é ímpar")
//     } else {
//         console.log ("O número " + contador + " é par")
//     }
//     contador++
// }



// EXERCÍCIO USANDO DO WHILE
//
let numeroDeAlunos = 10
let contador = 0
do { 
     if (contador === 0) {
         console.log("Zero")
     } else if (contador % 2 == 1) {
         console.log ("O número", contador, "é ímpar")
     } else {
         console.log ("O número " + contador + " é par")
    }
    contador++
} while (contador <= numeroDeAlunos)