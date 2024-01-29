
function jogos() {
    
    let  chuteDojogador=0
    
    chuteDojogador = chuteDojogador +1;
  
    chuteDojogador = (prompt("Digite seu chute!"));
let numeroMisterioso = Math.floor(Math.random() * 101);
alert(numeroMisterioso)




            if (chuteDojogador > numeroMisterioso) {
              
                alert("seu numero é menor que o numero misterioso");
                
                
            } else if (chuteDojogador < numeroMisterioso) {
               
                alert("seu numero é maior que o numero misterioso")
                
            } else if (chuteDojogador == numeroMisterioso) {
                alert("vitoria")
            } 
            }





