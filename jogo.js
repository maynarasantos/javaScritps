
function jogos() {
let chuteDojogador = 1
let numeroMisterioso = Math.floor(Math.random() * 100);
alert(numeroMisterioso)
let tentativas = 0
while (chuteDojogador <= 100) {
    tentativas++
    chuteDojogador = (prompt("Digite seu chute!"));
    
    
    if (chuteDojogador < numeroMisterioso) {
        
        alert("seu chute foi menor que o numero misterioso");
        
        
    } else if (chuteDojogador > numeroMisterioso) {
        
        alert("seu chute foi maior que o numero misterioso")
        
    } else if (chuteDojogador == numeroMisterioso) {
        alert( `"voce ganhou ""suas tentativas foram "${tentativas}`)
         console.log(fim)
    }
}
}
++chuteDojogador





