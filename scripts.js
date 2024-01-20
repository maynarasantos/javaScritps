
// function welcome() {

// }
// let userName = prompt("Digite o seu nome")
// alert('bem vindo(a), ${userName}')




// function hello() {
//     let number1 = +prompt('digite o primeiro numer')
//     let number2 = +prompt('digite o primeiro numer')
//     alert (typeof number)
//     alert('a soma de ${number1} com {number2} é igual a ${number1 + number2}')

function welcome() {
    let number1 = +prompt("digite o primeiro numero")
    if (number1 % 2 == 0) {
        alert("o numero digitado é par")

    } else {
        alert("o numero digitado é impar")
    }
}
//% é igual a resto de um divisao 

function max() {
    let number1 = +prompt("digite o primeiro numero")
    if (number1 > 0) {
        alert("o numero é positivo")

    } else if (number1 == 0) {
        alert("o numero é nulo")
    } else {
        alert("o numero é negativo")



    }
}

function may() {
    let number1 = +prompt("numero")
    let number2 = +prompt("numero")

    if (number1 > 10 && number2 > 10) {
        alert("dois numeros maior que dez")


    } else if (number1 > 10 || number2 > 10) {
        alert("um numero maior que dez")

    } else {
        alert("nenhum é maior que 10 ")
    }
}
function notas() {
    let number1 = +prompt("nota1")
    let number2 = +prompt("nota2")
    let number3 = +prompt("nota3")
    let number4 = +prompt("nota4")
    let media = Math.ceil((number1 + number2 + number3 + number4) / 4)

    if (media > 60) {
        alert(`aprovado valor da media ${media}`)
    } else if (media < 60) {
        alert(`nao aprovado valor da ${media}`)

    } else (media == 60); {
        alert(`aprovado valor da media ${media} `)
    }






}

function verificarVelocidade(velocidade){
    let velocidade= (70)
    
    if(velocidade< 70 ) {
        alert(`ok`)

    }else if (velocidade>70){
        alert(`ganha um ponto`)

    } else  (velocidade ==70);{
        alert("ok")

    }

}
