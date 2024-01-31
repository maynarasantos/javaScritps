
function jogos() {
let chuteDojogador = 1
let numeroMisterioso = Math.floor(Math.random() * 101);
alert(numeroMisterioso)
while (chuteDojogador <= 101) {
    
    chuteDojogador = (prompt("Digite seu chute!"));
    
    
    if (chuteDojogador < numeroMisterioso) {
        
        alert("seu numero é menor que o numero misterioso");
        
        
    } else if (chuteDojogador > numeroMisterioso) {
        
        alert("seu numero é maior que o numero misterioso")
        
    } else if (chuteDojogador == numeroMisterioso) {
        alert("vitoria")
    } console.log(fim)
    }
}
++chuteDojogador




