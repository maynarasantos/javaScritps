
function jogos() {
    let chuteDojogador = 1
    let numeroMisterioso = Math.floor(Math.random() * 100);
    let tentativas = 0
    while (chuteDojogador <= 100) {
        tentativas++
        chuteDojogador = (prompt("Digite seu chute!"));

        console.log(numeroMisterioso)

        if (chuteDojogador < numeroMisterioso) {

            alert("seu chute foi menor que o numero misterioso");

            ++chuteDojogador
        } else if (chuteDojogador > numeroMisterioso) {

            alert("seu chute foi maior que o numero misterioso")
            
            ++chuteDojogador
        } else if (chuteDojogador == numeroMisterioso) {
            alert(`"voce ganhou ""suas tentativas foram "${tentativas}`)
             break
        }
    }
}





