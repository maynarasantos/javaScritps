
function jogos() {
let chuteDojogador = 1
let numeroMisterioso = Math.floor(Math.random() * 100);
alert(numeroMisterioso)
while (chuteDojogador <= 100) {
    
    chuteDojogador = (prompt("Digite seu chute!"));
    
    
    if (chuteDojogador < numeroMisterioso) {
        
        alert("seu chute foi menor que o numero misterioso");
        
        
    } else if (chuteDojogador > numeroMisterioso) {
        
        alert("seu chute foi maior que o numero misterioso")
        
    } else if (chuteDojogador == numeroMisterioso) {
        alert( "parabens você acerto")
         console.log(fim)
    }
}
}
++chuteDojogador





