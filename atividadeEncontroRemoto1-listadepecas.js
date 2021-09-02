const listaDePecas = ["disco de freio", "motor", "câmbio", "pneu", "retrovisores"]

console.log(listaDePecas)

if (listaDePecas.length >= 10) {
    console.log("Não é possível cadastrar mais peças")
} else {
    console.log("É possível cadastrar mais peças")
}

var peso = 150
if (peso >= 100) {
    console.log("Peso adequado.")
} else {
    console.log("Peso insuficiente!")
}

let nomePeca = "disco de freio"
// if (nomePeca.length > 3) {
//     console.log("Nome adequado.")
// } else if (nomePeca.length == 0){
//     console.log("O nome da peça não pode ser vazio!")
// } else {
//     console.log("O nome da peça deve ter mais de 3 caracteres!")
// }

switch (nomePeca.length) {
    case 0:
      console.log("O nome nao pode ser vazio!")  
        break;

     case 1:
     case 2:
     case 3:
       console.log("O nome deve possuir mais de 3 caracteres!")
       break;
      
      default:
       console.log("Nome adequado.")
       break;
}