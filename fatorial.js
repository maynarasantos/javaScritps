

function fatorial() {
    let N = +prompt("digite o primeiro numero")
    let fatorial = N;
    for (cont = 1; cont < N; cont++) {
        fatorial = fatorial * (N - cont);
    }
    alert(N + "! = " + fatorial);
}


