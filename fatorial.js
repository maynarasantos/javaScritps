function fator () {
    let numero = +prompt("digite o primeiro numero")
    let fator = numero
    let soma = 1;
    if(Number.isInteger(numero) == true){
        while(numero>0){
            soma = soma*numero;
           
            alert(` ${numero*soma}`)
            numero--;
        }
return soma;
    }

else {
    console.log ("nao é interio")
    return 0;
}

}

// function fatorial(){
   
//     let n = +prompt("digite o primeiro numero")
//     let fatorial = n
//     let fat=1
//     for(
//         let c = n; c > 1; c--){
//             fat *=c
//         }
//         return fat
   
// }
// alert (fatorial(n))