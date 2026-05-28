function verificarNumero() {
    const input = document.getElementById("numero").value;
    const numero = Number(input);

    if (input.trim() === "" || Number.isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Digite um número válido.";
        return;
    }

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = `O número ${numero} é Par.`;
    } else {
        document.getElementById("resultado").innerHTML = `O número ${numero} é Ímpar.`;
    }
}
